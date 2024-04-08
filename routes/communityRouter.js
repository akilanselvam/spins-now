const express = require("express");
const communitiesRouter = express.Router();
const communityController = require("../controller/communityController.js");
const authController = require("../controller/authController.js");
communitiesRouter
  .route("/:id")
  .get(authController.protect, communityController.getSingleCommunity)
  .patch(communityController.updateCommunity)
  .delete(communityController.deleteCommunity);

communitiesRouter.route("/").get(communityController.getAllCommunities).post(communityController.createCommunity);

module.exports = communitiesRouter;
