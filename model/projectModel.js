const mongoose = require("mongoose");

const milestoneSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date
});

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  goals: [String],
  milestones: [milestoneSchema],
  timelines: {
    startDate: Date,
    endDate: Date,
    otherDates: [Date]
  },
  progress: {
    type: mongoose.Schema.Types.Mixed // Can be either a string or a number
  },
  impactMeasurement: {
    type: mongoose.Schema.Types.Mixed // Can be either a string or an object
  },
  teamMembers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" // Reference to User model
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
