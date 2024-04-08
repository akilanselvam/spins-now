const mongoose = require("mongoose");

const collaborationSchema = new mongoose.Schema({
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Problem",
    required: true
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  workspace: {
    type: String,
    required: true
  },
  discussions: [
    {
      type: String
    }
  ],
  documents: [
    {
      type: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Collaboration = mongoose.model("Collaboration", collaborationSchema);

module.exports = Collaboration;
