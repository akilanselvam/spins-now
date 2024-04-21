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

exports.getProblemsByCommunityId = async (req, res) => {
  try {
    const communityId = req.params.communityId;
    const page = parseInt(req.query.page) || 1; // Get page from query params or default to 1
    const perPage = 3; // Number of problems per page

    const problems = await Problem.find({ communityId })
      .sort({ createdAt: -1 }) // Sort in descending order of createdAt
      .skip((page - 1) * perPage)
      .limit(perPage);

    if (problems.length === 0 && page !== 1) {
      // If there are no problems on a page other than the first page
      return res.status(200).json({
        status: "success",
        message: "No more problems for the given community ID"
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        problems
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err.message
    });
  }
};

exports.getProblemsBySubmittedId = async (req, res) => {
  try {
    const submittedId = req.params.submittedId;
    const page = parseInt(req.query.page) || 1; // Get page from query params or default to 1
    const perPage = 6; // Number of problems per page

    const problems = await Problem.find({ submittedBy: submittedId })
      .sort({ createdAt: -1 }) // Sort in descending order of createdAt
      .skip((page - 1) * perPage)
      .limit(perPage);

    if (problems.length === 0 && page !== 1) {
      // If there are no problems on a page other than the first page
      return res.status(200).json({
        status: "success",
        message: "No more problems submitted by the given ID"
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        problems
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err.message
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
    const page = parseInt(req.query.page) || 1; // Get page from query params or default to 1
    const perPage = 5; // Number of problems per page
    const skip = (page - 1) * perPage;

    const problems = await Problem.aggregate([
      { $skip: skip }, // Skip documents based on the page number
      { $limit: perPage }, // Limit the number of documents per page
      {
        $project: {
          title: 1,
          description: 1,
          category: 1,
          urgency: 1,
          impactPotential: 1,
          status: 1,
          submittedBy: 1,
          createdAt: 1
        }
      }
    ]);

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

exports.searchProblems = async (req, res) => {
  try {
    const searchQuery = req.query.search;
    const regex = new RegExp(searchQuery, "i"); // Case-insensitive regex search

    let problems = await Problem.find({ title: regex }).limit(3);

    res.status(200).json({
      status: "success",
      results: problems.length,
      data: {
        problems
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: error.message
    });
  }
};
