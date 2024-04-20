const express = require("express");
const projectsRouter = express.Router();
const projectController = require("../controller/projectController.js");

projectsRouter.route("/LatestTenProject").get(projectController.getLatestTenProject);
projectsRouter.route("/getRandomSuggestedProjects").get(projectController.getRandomSuggestedProjects);

projectsRouter
  .route("/:id")
  .get(projectController.getSingleProject)
  .patch(projectController.updateProject)
  .delete(projectController.deleteProject);

projectsRouter.route("/").get(projectController.getAllProjects).post(projectController.createProject);

module.exports = projectsRouter;
