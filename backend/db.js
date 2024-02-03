const mongoose = require("mongoose");
require('dotenv').config();

const connetToMongo = async () => {
  const MONGO_URL = process.env.MONGO_URL
  console.log(MONGO_URL);
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully.\n");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = connetToMongo;
