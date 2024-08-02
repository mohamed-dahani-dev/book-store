const express = require("express");

// create router
const router = express.Router();

// import book model
const { Book, validateCreateBook } = require("../models/Book");

/**
@desc get all books
@route /book
@method get
@access public
**/

router.get("/book", async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json({ data: book, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong", success: false });
  }
});

// export the router
module.exports = router;
