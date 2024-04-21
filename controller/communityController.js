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

exports.getCommunityByProjectId = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const page = parseInt(req.query.page) || 1; // Get page from query params or default to 1
    const perPage = 3; // Number of communities per page

    const communities = await Community.find({ projectId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage);

    if (communities.length === 0 && page !== 1) {
      // If there are no communities on a page other than the first page
      return res.status(200).json({
        status: "success",
        message: "No more communities for the given project ID"
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        communities
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err.message
    });
  }
};

exports.getLatestTenCommunity = async (req, res) => {
  try {
    const community = await Community.find().sort({ createdAt: -1 }).limit(10);

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
