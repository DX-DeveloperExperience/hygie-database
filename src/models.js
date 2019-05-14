const schemas = require('./schemas');
const mongoose = require('mongoose');

const remoteEnvs = mongoose.model('remote-envs', schemas.remoteEnvsSchema);
const remoteRules = mongoose.model('remote-rules', schemas.remoteRulesSchema);

module.exports = {
  remoteEnvs,
  remoteRules,
};
