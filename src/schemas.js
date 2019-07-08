const mongoose = require('mongoose');

const remoteEnvsSchema = new mongoose.Schema({
  path: String,
  content: {
    gitApi: String,
    gitToken: String,
    git: String,
    gitlabId: String,
  },
});

const remoteEnvsVarsSchema = new mongoose.Schema({
  path: String,
  content: Object,
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
    updatedAt: Date,
  },
});

module.exports = {
  remoteEnvsSchema,
  remoteRulesSchema,
  remoteCronsSchema,
  remoteEnvsVarSchema: remoteEnvsVarsSchema,
};
