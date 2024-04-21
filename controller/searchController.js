const Problem = require("./../model/problemModel.js");
const Project = require("../model/projectModel.js");
const Community = require("../model/communityModel.js");

exports.searchProblems = async (req, res) => {
  try {
    const searchQuery = req.query.search;
    const regex = new RegExp(`.*${searchQuery}.*`, "i"); // Match any string containing the search query letter

    // Aggregate search results from all collections
    const results = await Promise.all([
      Problem.aggregate([
        { $match: { title: regex } },
        { $limit: 3 },
        { $project: { _id: 1, title: 1, type: "Problem" } } // Include _id and type fields
      ]),
      Project.aggregate([
        { $match: { title: regex } },
        { $limit: 3 },
        { $project: { _id: 1, title: 1, type: "Project" } } // Include _id and type fields
      ]),
      Community.aggregate([
        { $match: { title: regex } },
        { $limit: 3 },
        { $project: { _id: 1, title: 1, type: "Community" } } // Include _id and type fields
      ])
    ]);

    // Combine and limit the total results
    const combinedResults = results.reduce((acc, cur) => acc.concat(cur), []);

    res.status(200).json({
      status: "success",
      results: combinedResults.length,
      data: {
        results: combinedResults
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: error.message
    });
  }
};
