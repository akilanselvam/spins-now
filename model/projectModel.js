const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  goals: [String],
  timelines: {
    startDate: Date,
    endDate: Date,
    otherDates: [Date]
  },
  progress: {
    type: mongoose.Schema.Types.Mixed
  },
  impactMeasurement: {
    type: mongoose.Schema.Types.Mixed
  },
  teamMembers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
