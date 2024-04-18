const Collaboration = require("./../model/collaborationModel.js");
const Problem = require("./../model/problemModel.js");
const mongoose = require("mongoose");

exports.getAllCollaborations = async (req, res) => {
  try {
    const collaborations = await Collaboration.find();
    res.status(200).json({
      status: "success",
      requestedAT: req.requesttime,
      results: collaborations.length,
      data: {
        collaborations
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.createCollaboration = async (req, res) => {
  try {
    if (!req.body.problemId) {
      return res.status(400).json({
        status: "Failure",
        message: "Problem ID is required for creating a collaboration."
      });
    }

    if (!mongoose.Types.ObjectId.isValid(req.body.problemId)) {
      return res.status(400).json({
        status: "Failure",
        message: "Invalid Problem ID format."
      });
    }

    const existingProblem = await Problem.findById(req.body.problemId);
    console.log(req.body.problemId);
    if (!existingProblem) {
      return res.status(404).json({
        status: "Failure",
        message: "Problem not found."
      });
    }

    const newCollaboration = await Collaboration.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        collaboration: newCollaboration
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getSingleCollaboration = async (req, res) => {
  try {
    const collaboration = await Collaboration.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        collaboration
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getCollaborationsByProblemId = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get page from query params or default to 1
    const perPage = 3; // Number of collaborations per page
    const skip = (page - 1) * perPage;

    const collaborations = await Collaboration.find({ problemId: req.params.problemId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(perPage);

    res.status(200).json({
      status: "success",
      data: {
        collaborations
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getLatestTenCollaboration = async (req, res) => {
  try {
    const collaboration = await Collaboration.find().sort({ createdAt: -1 }).limit(10);

    res.status(200).json({
      status: "success",
      data: {
        collaboration
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.updateCollaboration = async (req, res) => {
  try {
    const collaboration = await Collaboration.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "Success",
      data: {
        collaboration
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.deleteCollaboration = async (req, res) => {
  try {
    await Collaboration.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success",
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};
