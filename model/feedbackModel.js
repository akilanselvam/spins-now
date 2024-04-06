const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  feedbackText: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" // Reference to User model
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
