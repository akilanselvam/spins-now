const express = require("express");
const AppError = require("./util/appError.js");
const morgan = require("morgan");
const app = express();
const problemsRouter = require("./routes/problemRoutes.js");
const collaborationRouter = require("./routes/collaborationRoutes.js");
const communityRouter = require("./routes/communityRouter.js");
const expertRouter = require("./routes/expertRouter.js");
const feedbackRouter = require("./routes/feedbackRouter.js");
const projectRouter = require("./routes/projectRouter.js");
const resourceRouter = require("./routes/resourceRouter.js");
const userRouter = require("./routes/userRouter.js");
const chatRouter = require("./routes/chatRouter.js");
const messageRouter = require("./routes/messageRouter.js");
const globalErrorHandler = require("./util/errorController.js");
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  req.requesttime = new Date().toISOString();
  //console.log(req.requesttime);
  next();
});
app.use((err, req, res, next) => {
  console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
});

app.use("/api/v1/problems", problemsRouter);
app.use("/api/v1/collaboration", collaborationRouter);
app.use("/api/v1/community", communityRouter);
app.use("/api/v1/expert", expertRouter);
app.use("/api/v1/feedback", feedbackRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/resource", resourceRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/message", messageRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find the ${req.originalUrl} on this server`
  });
  // const err = new Error(`Can't find the ${req.originalUrl} on this server`);
  // err.statusCode = 404;
  // err.status = 'Fail';
  //  next(new AppError(`Can't find the ${req.originalUrl} on this server`,404) );
});
app.use(globalErrorHandler);
module.exports = app;
