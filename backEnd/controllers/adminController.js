// import admin model
const { Admin, validationLoginAdmin } = require("../models/Admin");

// import jsonwebtoken
const jwt = require("jsonwebtoken");

/**
@desc login admin
@route /login
@method post
@access private
**/
const loginAdmin = async (req, res) => {
  try {
    // validation login admin
    const { error } = validationLoginAdmin(req.body);
    if (error) {
      return res
        .status(400)
        .json({ error: error.details[0].message, success: false });
    }

    // check if the admin already exists
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
      return res.json({
        error: "email or password incorrect or invalid",
        success: false,
      });
    }

    // check if the password is match before login
    if (req.body.password !== admin.password) {
      return res.json({
        error: "email or password incorrect or invalid",
        success: false,
      });
    }

    // create token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET_KEY);
    res.status(200).json({
      message: "Login successful",
      success: true,
      token: token,
      name: admin.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong", success: false });
  }
};

// export the controllers
module.exports = { loginAdmin };
