const express = require("express");
const resourcesRouter = express.Router();
const resourceController = require("../controller/resourceController.js");

resourcesRouter.route("/latestTen").get(resourceController.getLatestTenResource);

resourcesRouter
  .route("/:id")
  .get(resourceController.getSingleResource)
  .patch(resourceController.updateResource)
  .delete(resourceController.deleteResource);

resourcesRouter.route("/").get(resourceController.getAllResources).post(resourceController.createResource);

module.exports = resourcesRouter;
