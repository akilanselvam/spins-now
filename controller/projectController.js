const Project = require("../model/projectModel.js");
const mongoose = require("mongoose");
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({
      status: "success",
      requestedAT: req.requesttime,
      results: projects.length,
      data: {
        projects
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getRandomSuggestedProjects = async (req, res) => {
  try {
    const excludedProjectId = "662382e8eaf5f71098af148b";

    const projects = await Project.aggregate([
      { $match: { _id: { $ne: mongoose.Types.ObjectId(excludedProjectId) } } }, // Exclude project with specific ID
      { $sample: { size: 3 } } // Retrieve three random documents
    ]);
    res.status(200).json({
      status: "success",
      requestedAT: req.requesttime,
      results: projects.length,
      data: {
        projects
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        project: newProject
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getSingleProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        project
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getLatestTenProject = async (req, res) => {
  try {
    const project = await Project.find().sort({ createdAt: -1 }).limit(10);

    res.status(200).json({
      status: "success",
      data: {
        project
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "Success",
      data: {
        project
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
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
