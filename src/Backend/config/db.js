const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = 'mongodb://localhost/users'

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI);
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;