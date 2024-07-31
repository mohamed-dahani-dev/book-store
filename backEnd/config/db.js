const mongoose = require("mongoose");

const connectToMongoDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connect with database successfully");
    })
    .catch((error) => {
      console.log("Connect faild with database", Error(error));
    });
};

module.exports = connectToMongoDB;