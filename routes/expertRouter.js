const express = require("express");
const expertsRouter = express.Router();
const expertController = require("../controller/expertController.js");

expertsRouter.route("/latestTen").get(expertController.getLatestTenExpert);

expertsRouter
  .route("/:id")
  .get(expertController.getSingleExpert)
  .patch(expertController.updateExpert)
  .delete(expertController.deleteExpert);

expertsRouter.route("/").get(expertController.getAllExperts).post(expertController.createExpert);

module.exports = expertsRouter;
