const localdb = require('./src/connection');
const models = require('./src/models');

const remoteRules = models.remoteRules;
const remoteEnvs = models.remoteEnvs;

const main = async () => {
  await localdb
    .connection()
    .then(res => console.log(res))
    .catch(err => logger.error(err));

  await remoteEnvs
    .insertMany([
      { content: { gitApi: 'myAPI', gitToken: 'myToken' }, path: 'myPath' },
    ])
    .then(res => console.log(res))
    .catch(err => console.error(err));
};

main();
