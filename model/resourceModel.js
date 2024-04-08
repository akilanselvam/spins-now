const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  uploader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  file: {
    type: String,
    required: true
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

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
