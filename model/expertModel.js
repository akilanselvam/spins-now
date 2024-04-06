const mongoose = require("mongoose");

const expertSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  expertiseAreas: [
    {
      type: String,
      required: true
    }
  ],
  bio: {
    type: String,
    required: true
  },
  contactDetails: {
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String
    },
    otherInfo: {
      type: String
    }
  },
  availability: {
    type: mongoose.Schema.Types.Mixed // Can be either a string or an object
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Expert = mongoose.model("Expert", expertSchema);

module.exports = Expert;
