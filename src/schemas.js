const mongoose = require('mongoose');

const remoteEnvsSchema = new mongoose.Schema({
  path: String,
  content: {
    gitApi: String,
    gitToken: String,
  },
});

const remoteRulesSchema = new mongoose.Schema({
  path: String,
  content: String,
});

const remoteCronsSchema = new mongoose.Schema({
  path: String,
  content: {
    filename: String,
    projectURL: String,
    gitlabProjectId: Number,
    expression: String,
  },
});

module.exports = {
  remoteEnvsSchema,
  remoteRulesSchema,
  remoteCronsSchema,
};
