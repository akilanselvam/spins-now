const express = require("express");
const usersRouter = express.Router();
const userController = require("../controller/userController.js");

usersRouter
  .route("/:id")
  .get(userController.getSingleUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

usersRouter.route("/").get(userController.getAllUsers).post(userController.createUser);

module.exports = usersRouter;
