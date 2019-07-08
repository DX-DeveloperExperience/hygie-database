# Hygie-Database

Mongodb API to interact with Hygie project.

## Getting Started

### Download

`npm i @dxdeveloperexperience/hygie-database`

### Create database

In mongo shell:

```
use hygie
db.remote_envs.insert({})
db.remote_rules.insert({})
db.remote_crons.insert({})
db.remote_envs_var.insert({})
db.remote_envs.remove({})
db.remote_rules.remove({})
db.remote_crons.remove({})
db.remote_envs_var.remove({})
```

This script will create the 4 collections you need in the `hygie` database.

### Usage

```typescript
const API = require('@dxdeveloperexperience/hygie-database');
const localdb = API.localdb;

const remoteRules = API.models.remoteRules;
const remoteEnvs = API.models.remoteEnvs;
const remoteEnvsVar = API.models.remoteEnvsVar;
const remoteCrons = API.models.remoteCrons;

const main = async () => {
  await localdb
    .connection()
    .then(res => console.log(res))
    .catch(err => console.error(err));

  await remoteEnvs
    .insertMany([
      { content: { gitApi: 'myAPI', gitToken: 'myToken' }, path: 'myPath' },
    ])
    .then(res => console.log(res))
    .catch(err => console.error(err));
};

main();
```
