const express = require("express");
const problemsRouter = express.Router();
const problemController = require("../controller/problemController.js");

problemsRouter.route("/latestTen").get(problemController.getLatestTenProblem);

problemsRouter
  .route("/:id")
  .get(problemController.getSingleProblem)
  .patch(problemController.updateProblem)
  .delete(problemController.deleteProblem);

problemsRouter.route("/").get(problemController.getAllProblems).post(problemController.postAllProblems);

module.exports = problemsRouter;
