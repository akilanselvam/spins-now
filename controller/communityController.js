const Community = require("../model/communityModel.js");

exports.getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.status(200).json({
      status: "success",
      requestedAT: req.requesttime,
      results: communities.length,
      data: {
        communities
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.createCommunity = async (req, res) => {
  try {
    const newCommunity = await Community.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        community: newCommunity
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getSingleCommunity = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        community
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.updateCommunity = async (req, res) => {
  try {
    const community = await Community.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "Success",
      data: {
        community
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.deleteCommunity = async (req, res) => {
  try {
    await Community.findByIdAndDelete(req.params.id);
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