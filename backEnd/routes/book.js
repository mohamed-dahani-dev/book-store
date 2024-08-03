const express = require("express");
// create router
const router = express.Router();
// import the controllers
const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
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

// update book
router.put("/update/:id", upload.single("image"), updateBook);

// delete book
router.delete("/book/:id", deleteBook);

// export the router
module.exports = router;
