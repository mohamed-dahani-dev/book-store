// import admin model
const {
  User,
  validationLoginUser,
  validationRegisterUser,
} = require("../models/User");

// import jsonwebtoken
const jwt = require("jsonwebtoken");

// import bcrypt
const bcrypt = require("bcrypt");

/**
@desc register user
@route /user/register
@method post
@access public
**/

const registerUser = async (req, res) => {
  try {
    // validation of register user
    const { error } = validationRegisterUser(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // check if the user already registered
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.json({ error: "This user already exists", success: false });
    }

    // hashing the password
    const salt = await bcrypt.genSalt(10); // genSalt(10) is mean the level of hashing
    req.body.password = await bcrypt.hash(req.body.password, salt);

    // create a new user
    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      gender: req.body.gender,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();

    // create a jwt
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);
    res.status(201).json({
      token: token,
      success: true,
      userName: newUser.firstName,
      message: "Register successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong", success: false });
  }
};

/**
@desc login user
@route /user/login
@method post
@access public
**/

const loginUser = async (req, res) => {
  try {
    // validation of login user
    const { error } = validationLoginUser(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // check if the user exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({
        error: "email or password incorrect or invalid",
        success: false,
      });
    }

    // unhash the password before login
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      return res.json({
        error: "email or password incorrect or invalid",
        success: false,
      });
    }

    // create a new jwt
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    res.status(200).json({
      token: token,
      userName: user.firstName,
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong", success: false });
  }
};

// export module
module.exports = { registerUser, loginUser };
