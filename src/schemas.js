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

module.exports = {
  remoteEnvsSchema,
  remoteRulesSchema,
};
