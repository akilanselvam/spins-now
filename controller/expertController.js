const Expert = require("../model/expertModel.js");

exports.getAllExperts = async (req, res) => {
  try {
    const experts = await Expert.find();
    res.status(200).json({
      status: "success",
      requestedAT: req.requesttime,
      results: experts.length,
      data: {
        experts
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.createExpert = async (req, res) => {
  try {
    const newExpert = await Expert.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        expert: newExpert
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getSingleExpert = async (req, res) => {
  try {
    const expert = await Expert.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        expert
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.updateExpert = async (req, res) => {
  try {
    const expert = await Expert.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "Success",
      data: {
        expert
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.deleteExpert = async (req, res) => {
  try {
    await Expert.findByIdAndDelete(req.params.id);
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
