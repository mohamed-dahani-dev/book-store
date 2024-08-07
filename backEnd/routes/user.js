const express = require("express");
// create router
const router = express.Router();
// import the controllers
const { registerUser, loginUser } = require("../controllers/userController");

// register user
router.post("/user/register", registerUser);

// login user
router.post("/user/login", loginUser);

// export the router
module.exports = router;
