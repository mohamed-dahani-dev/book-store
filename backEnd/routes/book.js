const express = require("express");
// create router
const router = express.Router();
// import the controllers
const { getAllBooks, addBook } = require("../controllers/bookController");
// import multer
const multer = require("multer");

// get all books
router.get("/book", getAllBooks);

// image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// add new book
router.post("/add", upload.single("image"), addBook);

// export the router
module.exports = router;
