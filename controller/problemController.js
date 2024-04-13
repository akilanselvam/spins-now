const Problem = require("./../model/problemModel.js");
const APIFeautres = require("./../util/apifeatures.js");

exports.getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find();
    res.status(200).json({
      status: "success",
      requestedAT: req.requesttime,
      results: problems.length,
      data: {
        problems
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.postAllProblems = async (req, res) => {
  try {
    const newProblems = await Problem.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        problems: newProblems
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.getLatestTenProblem = async (req, res) => {
  try {
    const problems = await Problem.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select("title description category urgency impactPotential status submittedBy createdAt");
    res.status(200).json({
      status: "success",
      data: {
        problems
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err.message
    });
  }
};

exports.getSingleProblem = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        problem
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.updateProblem = async (req, res) => {
  try {
    const problem = await Problem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "Success",
      data: {
        problem
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};

exports.deleteProblem = async (req, res) => {
  try {
    await Problem.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success",
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      message: err
    });
  }
};
