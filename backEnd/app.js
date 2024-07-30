const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToMongoDB = require("./config/db");

// run dotenv
dotenv.config();

// connect to MongoDB
connectToMongoDB();

// run the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `the server is running in ${process.env.NODE_ENV} at http://localhost:${process.env.PORT}`
  );
});
