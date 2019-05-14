const schemas = require('./schemas');
const mongoose = require('mongoose');

const remoteEnvs = mongoose.model('remote_envs', schemas.remoteEnvsSchema);
const remoteRules = mongoose.model('remote_rules', schemas.remoteRulesSchema);

module.exports = {
  remoteEnvs,
  remoteRules,
};
