const express = require("express");

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

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  req.requesttime = new Date().toISOString();
  console.log(req.requesttime);
  next();
});

app.use("/api/v1/problems", problemsRouter);
app.use("/api/v1/collaboration", collaborationRouter);
app.use("/api/v1/community", communityRouter);
app.use("/api/v1/expert", expertRouter);
app.use("/api/v1/feedback", feedbackRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/resource", resourceRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;
