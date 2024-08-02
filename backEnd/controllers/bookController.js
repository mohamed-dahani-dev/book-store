// import book model
const { Book, validateCreateBook } = require("../models/Book");

/**
@desc get all books
@route /book
@method get
@access public
**/

const getAllBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json({ data: book, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong", success: false });
  }
};

/**
@desc pots a book
@route /add
@method post
@access private
**/

const addBook = async (req, res) => {
  try {
    // validation of add book
    const { error } = validateCreateBook(req.body);
    if (error) {
      return res
        .status(400)
        .json({ error: error.details[0].message, success: false });
    }

    // create a new book
    // lets take the file name and transfor him to string
    const imageFileName = `${req.file.filename}`;

    const book = new Book({
      image: imageFileName,
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
      ISBN: req.body.ISBN,
      pages: req.body.pages,
      rate: req.body.rate,
      price: req.body.price,
      category: req.body.category,
    });
    // save the new book
    await book.save();
    res.status(201).json({ message: "Book added successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong", success: false });
  }
};

// export the controllers
module.exports = { getAllBooks, addBook };
