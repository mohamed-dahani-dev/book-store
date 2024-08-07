// import mongoose
const mongoose = require("mongoose");

// import joi for validation
const Joi = require("joi");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 100,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 100,
      required: true,
    },
    birthday: {
      type: Date,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      trim: true,
      required: true,
    },
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

// validation of login user
const validationLoginUser = (bodyparameter) => {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(255).required(),
    password: Joi.string().trim().min(8).required(),
  });
  return schema.validate(bodyparameter);
};

// validation of register user
const validationRegisterUser = (bodyparameter) => {
  const schema = Joi.object({
    firstName: Joi.string().trim().min(3).max(100).required(),
    lastName: Joi.string().trim().min(3).max(100).required(),
    birthday: Joi.date().required(),
    gender: Joi.string().trim().required(),
    email: Joi.string().trim().min(5).max(255).required(),
    password: Joi.string().trim().min(8).required(),
  });
  return schema.validate(bodyparameter);
};

// create a model of user
const User = mongoose.model("User", userSchema);

// export module
module.exports = { User, validationLoginUser, validationRegisterUser };
