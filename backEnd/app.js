const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectToMongoDB = require("./config/db");

// run dotenv
dotenv.config();

// connect to MongoDB
connectToMongoDB();

// get the path of routes
const bookPath = require("./routes/book"); // import books from routes files
const adminPath = require("./routes/admin"); // import admin from routes files
const userPath = require("./routes/user"); // import user from routes files

// middlewares
app.use(express.json()); // read the body parameters
app.use(cors()); // use the api from anywhere
app.use("/images", express.static("uploads")); // read the static file like images
// call all routes
app.use("/", bookPath);
app.use("/", adminPath);
app.use("/", userPath);

// run the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `the server is running in ${process.env.NODE_ENV} at http://localhost:${process.env.PORT}`
  );
});
