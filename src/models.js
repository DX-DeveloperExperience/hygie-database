const schemas = require('./schemas');
const mongoose = require('mongoose');

const remoteEnvs = mongoose.model('remote_envs', schemas.remoteEnvsSchema);
const remoteRules = mongoose.model('remote_rules', schemas.remoteRulesSchema);
const remoteCrons = mongoose.model('remote_crons', schemas.remoteCronsSchema);

module.exports = {
  remoteEnvs,
  remoteRules,
  remoteCrons,
};
