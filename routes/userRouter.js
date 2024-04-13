const express = require("express");
const usersRouter = express.Router();
const userController = require("../controller/userController.js");
const authController = require("../controller/authController.js");

usersRouter.route("/signup").post(authController.signup);
usersRouter.route("/login").post(authController.login);
usersRouter.route("/updatePassword").patch(authController.protect, authController.updatePassword);
usersRouter.route("/latestTen").get(userController.getLatestTenUser);
usersRouter
  .route("/:id")
  .get(userController.getSingleUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

usersRouter.route("/").get(userController.getAllUsers).post(userController.createUser);

module.exports = usersRouter;
