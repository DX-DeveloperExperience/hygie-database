const mongoose = require('mongoose');

interface KeyValueEnvFileInterface {
  [key: string]: string | boolean | number;
}

const remoteEnvsSchema = new mongoose.Schema({
  path: String,
  content: {
    gitApi: String,
    gitToken: String,
    git: String,
    gitlabId: String,
  },
});

const remoteEnvsVarSchema = new mongoose.Schema({
  path: String,
  content: {
    type: Map,
    of: String | Boolean | Number,
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
    updatedAt: Date,
  },
});

module.exports = {
  remoteEnvsSchema,
  remoteRulesSchema,
  remoteCronsSchema,
  remoteEnvsVarSchema,
};
