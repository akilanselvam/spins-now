const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  organizer: String,
  attendees: [String],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;
