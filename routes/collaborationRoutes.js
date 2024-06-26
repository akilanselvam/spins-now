const express = require("express");
const collaborationsRouter = express.Router();
const collaborationController = require("../controller/collaborationController.js");

collaborationsRouter.route("/latestTen").get(collaborationController.getLatestTenCollaboration);
collaborationsRouter
  .route("/getCollaborationsByProblemId/:problemId")
  .get(collaborationController.getCollaborationsByProblemId);

collaborationsRouter
  .route("/:id")
  .get(collaborationController.getSingleCollaboration)
  .patch(collaborationController.updateCollaboration)
  .delete(collaborationController.deleteCollaboration);

collaborationsRouter
  .route("/")
  .get(collaborationController.getAllCollaborations)
  .post(collaborationController.createCollaboration);

module.exports = collaborationsRouter;
