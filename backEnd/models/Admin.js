// import mongoose
const mongoose = require("mongoose");

// import joi for validation
const Joi = require("joi");

// create schema for book
const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      minLength: 5,
      maxLength: 255,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 8,
      required: true,
    },
  },
  { timestamps: true }
);

// validation of login admin
const validationLoginAdmin = (bodyparameter) => {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(255).required(),
    password: Joi.string().trim().min(8).required(),
  });
  return schema.validate(bodyparameter);
};

// create model of Admin
const Admin = mongoose.model("Admin", adminSchema);

// export module
module.exports = { Admin, validationLoginAdmin };
