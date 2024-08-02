const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToMongoDB = require("./config/db");
const path = require("path");

// run dotenv
dotenv.config();

// connect to MongoDB
connectToMongoDB();

// get the path of routes
const bookPath = require("./routes/book"); // import books from routes files

// middlewares
app.use(express.json()); // read the body parameters
app.use("/images", express.static(path.join(__dirname, "uploads/images"))); // read the static file like images
// call all routes
app.use("/", bookPath);

// run the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `the server is running in ${process.env.NODE_ENV} at http://localhost:${process.env.PORT}`
  );
});
