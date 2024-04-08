const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  problemId: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: [true, "A Problem Must Always Have a Title"]
  },
  description: {
    type: String,
    required: [true, "A Problem Must Always Have a Description"]
  },
  category: {
    type: String,
    required: [true, "A Problem Must Belong to a Category"]
  },
  urgency: {
    type: String,
    enum: ["low", "medium", "high"],
    required: [true, "A Problem Must Have an Urgency Level"]
  },
  impactPotential: {
    type: String,
    enum: ["low", "medium", "high"],
    required: [true, "A Problem Must Have an Impact Potential Level"]
  },
  status: {
    type: String,
    enum: ["pending", "solved", "in progress", "closed"],
    required: [true, "A Problem Must Have a Status"]
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  communityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
