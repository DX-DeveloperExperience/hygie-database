const mongoose = require('mongoose');

/**
 * Connection to the mongo database
 * @param {*} connectionString
 */
const connection = async (connectionString = 'mongodb://localhost/hygie') => {
  return new Promise(async (resolve, reject) => {
    mongoose.connect(connectionString, {
      useNewUrlParser: true,
    });

    const db = mongoose.connection;

    db.on('error', err => reject(err));
    db.once('open', () => {
      resolve('connected !');
    });
  });
};

module.exports = {
  connection,
};
