const messageController = require("../controller/messageController.js");
const express = require("express");
const messageRouter = express.Router();

messageRouter.route("/").post(messageController.addMessage);
messageRouter.route("/:chatId").get(messageController.getMessages);

module.exports = messageRouter;
