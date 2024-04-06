const Collaboration = require("./../model/collaborationModel.js");

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
