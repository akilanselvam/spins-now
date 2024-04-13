const express = require("express");
const feedbacksRouter = express.Router();
const feedbackController = require("../controller/feedbackController.js");

feedbacksRouter.route("/latestTen").get(feedbackController.getLatestTenFeedback);

feedbacksRouter
  .route("/:id")
  .get(feedbackController.getSingleFeedback)
  .patch(feedbackController.updateFeedback)
  .delete(feedbackController.deleteFeedback);

feedbacksRouter.route("/").get(feedbackController.getAllFeedbacks).post(feedbackController.createFeedback);

module.exports = feedbacksRouter;
