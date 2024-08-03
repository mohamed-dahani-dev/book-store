// import book model
const {
  Book,
  validateCreateBook,
  validateUpdateBook,
} = require("../models/Book");

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

/**
@desc update a book
@route /update
@method put
@access private
**/

const updateBook = async (req, res) => {
  try {
    // validation of update book
    const { error } = validateUpdateBook(req.body);
    if (error) {
      return res
        .status(500)
        .json({ error: error.details[0].message, success: false });
    }

    // update book
    // lets take the file name and transfor him to string
    const imageFileName = `${req.file.filename}`;

    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          image: imageFileName,
          title: req.body.title,
          description: req.body.description,
          author: req.body.author,
          ISBN: req.body.ISBN,
          pages: req.body.pages,
          rate: req.body.rate,
          price: req.body.price,
          category: req.body.category,
        },
      },
      { new: true }
    );
    if (book) {
      return res
        .status(200)
        .json({ message: "Book updated successfully", success: true });
    } else {
      return res
        .status(404)
        .json({ message: "Book not found", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong", success: false });
  }
};

/**
@desc delete a book
@route /book
@method put
@access private
**/

const deleteBook = async (req, res) => {
  try {
    // delete book
    const book = await Book.findOneAndDelete(req.body.id);
    if (book) {
      return res
        .status(200)
        .json({ message: "Book deleted successfully", success: true });
    } else {
      return res
        .status(404)
        .json({ message: "Book not found", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong", success: false });
  }
};

// export the controllers
module.exports = { getAllBooks, addBook, updateBook, deleteBook };