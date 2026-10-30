const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log(`Mongo connected on ${dbURL}`);
  } catch (err) {
    console.log(`Connection has error ${err}`);
  }

  process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Mongo is disconnected');
    process.exit(0);
  });
};
