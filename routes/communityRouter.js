const express = require("express");
const communitiesRouter = express.Router();
const communityController = require("../controller/communityController.js");

communitiesRouter
  .route("/:id")
  .get(communityController.getSingleCommunity)
  .patch(communityController.updateCommunity)
  .delete(communityController.deleteCommunity);

communitiesRouter.route("/").get(communityController.getAllCommunities).post(communityController.createCommunity);

module.exports = communitiesRouter;
