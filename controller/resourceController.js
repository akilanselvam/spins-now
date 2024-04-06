const Resource = require("./../model/resourceModel.js");

exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json({
      status: "success",
      requestedAT: req.requesttime,
      results: resources.length,
      data: {
        resources
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.createResource = async (req, res) => {
  try {
    const newResource = await Resource.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        resource: newResource
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getSingleResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        resource
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.updateResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "Success",
      data: {
        resource
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.deleteResource = async (req, res) => {
  try {
    await Resource.findByIdAndDelete(req.params.id);
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
