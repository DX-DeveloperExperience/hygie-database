# Git-Webhooks-Database

Mongodb API to interact with Git-Webhooks project.

## Getting Started

### Download

`npm i @dxdeveloperexperience/git-webhooks-database`

### Create database

In mongo shell:

```
use git_webhooks
db.remote_envs.insert({})
db.remote_rules.insert({})
db.remote_envs.remove({})
db.remote_rules.remove({})
```

This script will create the 2 collections you need in the `git_webhooks` database.

### Usage

```typescript
const API = require('@dxdeveloperexperience/git-webhooks-database');
const localdb = API.localdb;

const remoteRules = API.models.remoteRules;
const remoteEnvs = API.models.remoteEnvs;

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
