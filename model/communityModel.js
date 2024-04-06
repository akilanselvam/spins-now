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
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;
