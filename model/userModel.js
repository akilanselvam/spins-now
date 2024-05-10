const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same"
    }
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  expert: {
    type: String,
    enum: ["yes", "no"],
    required: true
  },
  phoneNumber: String,
  state: String,
  country: String,
  age: Number,
  sex: String,
  skills: [String],
  expertise: [String],
  areasOfInterest: [String],
  passwordChangedAt: {
    type: Date,
    select: true
  },
  profilePicture: {
    type: String,
    default: "" // Default value is an empty string
  },
  expert: {
    type: String,
    enum: ["yes", "no"],
    default: "no"
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (bodyPassword, userPassword) {
  return await bcrypt.compare(bodyPassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp; // 100
  }
  return false;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
