const User = require("../model/userModel.js");
const avatarInitials = require("avatar-initials");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      requestedAT: req.requesttime,
      results: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    // Generate avatar based on gender
    const gender = req.body.sex || "unknown"; // Assuming 'sex' field denotes gender
    const initials = req.body.firstName.charAt(0) + req.body.lastName.charAt(0); // Initials for the avatar
    const avatarSVG = avatarInitials.create({ initials, gender });

    // Add avatar to user object
    req.body.profilePicture = avatarSVG;

    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getLatestTenUser = async (req, res) => {
  try {
    const user = await User.find().sort({ createdAt: -1 }).limit(10);

    res.status(200).json({
      status: "success",
      data: {
        user
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "Success",
      data: {
        user
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success",
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.searchUsers = async (req, res) => {
  try {
    const searchQuery = req.query.search;
    const regex = new RegExp(`.*${searchQuery}.*`, "i");

    const results = await User.aggregate([
      { $match: { $or: [{ username: regex }, { firstName: regex }, { lastName: regex }] } },
      { $limit: 3 },
      { $project: { _id: 1, username: 1, firstName: 1, lastName: 1, type: "User" } }
    ]);

    res.status(200).json({
      status: "success",
      results: results.length,
      data: {
        results: results
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: error.message
    });
  }
};
