const chatController = require("../controller/chatController.js");
const express = require("express");
const chatRouter = express.Router();

chatRouter.route("/").post(chatController.createChat);
chatRouter.route("/:userId").get(chatController.userChats);
chatRouter.route("/find/:firstId/:secondId").get(chatController.findChat);

module.exports = chatRouter;
