const fs = require("fs");

const problems = JSON.parse(fs.readFileSync(`${__dirname}/../data/dev-data/spinsNowBackend.json`));

exports.getAllProblems = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAT: req.requesttime,
    results: problems.length,
    data: {
      problems
    }
  });
};

exports.postAllProblems = (req, res) => {
  const newId = problems[problems.length - 1].problemId + 1;
  const newProblems = Object.assign({ problemId: newId }, req.body);
  problems.push(newProblems);
  fs.writeFile(`${__dirname}/../data/dev-data/spinsNowBackend.json`, JSON.stringify(problems), err => {
    res.status(201).json({
      status: "success",
      data: {
        problems: newProblems
      }
    });
  });
};

exports.getSingleProblem = (req, res) => {
  const id = req.params.id * 1;
  console.log(req.params);
  const problem = problems.find(el => el.problemId == id);
  res.status(200).json({
    status: "success",
    data: {
      problem
    }
  });
};

exports.updateProblem = (req, res) => {
  const id = req.params.id * 1;
  console.log(req.params);
  res.status(200).json({
    status: "Success",
    data: {
      problem: "<updated text will be here>"
    }
  });
};

exports.deleteProblem = (req, res) => {
  const id = req.params.id * 1;
  console.log(req.params);
  res.status(204).json({
    status: "Success",
    data: null
  });
};
