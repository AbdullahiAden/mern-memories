const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URL);
    console.log(`mongodb connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    // exit code 1 is for failure
    process.exit(1);
  }
};

module.exports = connectDB;
