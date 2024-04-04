const express = require("express");

const morgan = require("morgan");
const app = express();
const problemsRouter = require("./routes/problemRoutes.js");

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  req.requesttime = new Date().toISOString();
  console.log(req.requesttime);
  next();
});

app.use("/api/v1/problems", problemsRouter);

module.exports = app;
