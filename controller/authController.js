const User = require("./../model/userModel.js");
const catchAsync = require("./../util/catchAsync.js");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const AppError = require("./../util/appError.js");

const jwtToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

const createSendToken = (user, statusCode, res) => {
  const token = jwtToken(user._id);
  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true
  };
  //res.cookie("jwt", token, cookieOptions);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user
    }
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      user: newUser
    }
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  const correct = await user.correctPassword(password, user.password);

  if (!user || !correct) {
    return next(new AppError("Incorrect email or password, 401"));
  }
  const token = jwtToken(user._id);
  const username = user.username;
  const expert = user.expert;
  res.status(200).json({
    status: "success",
    token,
    username,
    expert
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log(token);
  if (!token) {
    console.log("token");
    return next(new AppError("You are not logged in! Please log in to get access", 401));
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(new AppError("The user belonging to this token does no longer exist.", 401));
  }
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(new AppError("User recently changed password! Please log in again.", 401));
  }
  req.user = freshUser;

  next();
});

exports.retriveUserId = catchAsync(async (req, res, next) => {
  let token;
  console.log("retriveUserId");
  if (req.body.token) {
    token = req.body.token;
    console.log(token);
  } else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("Token missing! Please provide a token.", 401));
  }

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const freshUser = await User.findById(decoded.id);

    if (!freshUser) {
      return next(new AppError("The user belonging to this token does no longer exist.", 401));
    }

    if (freshUser.changedPasswordAfter(decoded.iat)) {
      return next(new AppError("User recently changed password! Please log in again.", 401));
    }

    res.status(200).json({
      status: "success",
      userId: freshUser._id
    });
  } catch (err) {
    return next(new AppError("Invalid token! Please log in again.", 401));
  }
});

exports.expertProtect = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log(token);
  if (!token) {
    console.log("token");
    return next(new AppError("You are not logged in! Please log in to get access", 401));
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(new AppError("The user belonging to this token does no longer exist.", 401));
  }
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(new AppError("User recently changed password! Please log in again.", 401));
  }

  // Check if the user is an expert
  if (freshUser.expert !== "yes") {
    return next(new AppError("Access denied. You are not authorized to access this resource.", 403));
  }

  req.user = {
    ...freshUser.toObject(),
    isExpert: true
  };

  next();
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("Your current password is wrong.", 401));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  createSendToken(user, 201, res);
});
