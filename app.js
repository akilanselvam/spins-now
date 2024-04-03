const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`your app is running under ${port}🍷🍷🍷.....!!`);
});

app.use(express.json());

const problems = JSON.parse(fs.readFileSync(`${__dirname}/data/dev-data/spinsNowBackend.json`));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Your server request is working fine",
    status: "success"
  });
});

app.get("/api/v1/problems", (req, res) => {
  res.status(200).json({
    status: "success",
    results: problems.length,
    data: {
      problems
    }
  });
});

app.post("/api/v1/problems", (req, res) => {
  const newId = problems[problems.length - 1].problemId + 1;
  const newProblems = Object.assign({ problemId: newId }, req.body);
  problems.push(newProblems);
  fs.writeFile(`${__dirname}/data/dev-data/spinsNowBackend.json`, JSON.stringify(problems), err => {
    res.status(201).json({
      status: "success",
      data: {
        problems: newProblems
      }
    });
  });
});

app.get("/api/v1/problems/:id", (req, res) => {
  const id = req.params.id * 1;
  console.log(req.params);
  const problem = problems.find(el => el.problemId == id);
  res.status(200).json({
    status: "success",
    data: {
      problem
    }
  });
});

app.patch("/api/v1/problems/:id", (req, res) => {
  const id = req.params.id * 1;
  console.log(req.params);
  res.status(200).json({
    status: "Success",
    data: {
      problem: "<updated text will be here>"
    }
  });
});

app.delete("/api/v1/problems/:id", (req, res) => {
  const id = req.params.id * 1;
  console.log(req.params);
  res.status(204).json({
    status: "Success",
    data: null
  });
});
