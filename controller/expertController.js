const Expert = require("../model/expertModel.js");
const User = require("../model/userModel.js");

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
    const userData = await User.findById(req.body.userId);
    if (!userData) {
      return res.status(404).json({
        status: "Failure",
        message: "User not found"
      });
    }
    const existingExpert = await Expert.findOne({ userId: req.body.userId });
    if (existingExpert) {
      return res.status(409).json({
        status: "Failure",
        message: "User already exists as an expert"
      });
    }
    const fullName = `${userData.firstName} ${userData.lastName}`;
    const expertData = {
      userId: req.body.userId,
      fullName: fullName,
      expertiseAreas: req.body.expertiseAreas,
      availability: req.body.availability,
      bio: null,
      contactDetails: {
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        otherInfo: null
      }
    };

    const newExpert = await Expert.create(expertData);
    await User.findByIdAndUpdate(req.body.userId, { expert: "yes" });

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

exports.getLatestTenExpert = async (req, res) => {
  try {
    const expert = await Expert.find().sort({ createdAt: -1 }).limit(10);

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
