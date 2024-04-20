const express = require("express");
const problemsRouter = express.Router();
const problemController = require("../controller/problemController.js");
const authController = require("../controller/authController.js");

problemsRouter.route("/latestTen").get(problemController.getLatestTenProblem);
problemsRouter.get("/search", problemController.searchProblems);

problemsRouter
  .route("/:id")
  .get(problemController.getSingleProblem)
  .patch(problemController.updateProblem)
  .delete(problemController.deleteProblem);

problemsRouter.route("/").get(problemController.getAllProblems).post(problemController.postAllProblems);

module.exports = problemsRouter;
