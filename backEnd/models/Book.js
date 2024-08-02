// import mongoose
const mongoose = require("mongoose");

// import joi for validation
const Joi = require("joi");

// create schema for book
const bookSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      trim: true,
      minLength: 1,
      maxLength: 255,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      minLength: 10,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      minLength: 1,
      maxLength: 255,
      required: true,
    },
    ISBN: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 13,
      required: true,
      unique: true,
    },
    pages: {
      type: Number,
      trim: true,
      min: 1,
      required: true,
    },
    rate: {
      type: Number,
      trim: true,
      min: 0,
      max: 5,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      min: 0,
      max: 9999,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 100,
      required: true,
    },
  },
  { timestamps: true }
);

// validation of create a book
const validateCreateBook = (bodyParameter) => {
  const schema = Joi.object({
    image: Joi.string().trim(),
    title: Joi.string().trim().min(1).max(255).required(),
    description: Joi.string().trim().min(10).required(),
    author: Joi.string().trim().min(1).max(255).required(),
    ISBN: Joi.string().trim().min(3).max(13).required(),
    pages: Joi.number().min(1).required(),
    rate: Joi.number().min(0).max(5).required(),
    price: Joi.number().min(0).max(9999).required(),
    category: Joi.string().trim().min(3).max(100).required(),
  });
  return schema.validate(bodyParameter);
};

// create model of book
const Book = mongoose.model("Book", bookSchema);

// export module
module.exports = { Book, validateCreateBook };
