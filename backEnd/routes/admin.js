const express = require("express");
// create router
const router = express.Router();
// import the controllers
const { loginAdmin } = require("../controllers/adminController");

// login admin
router.post("/admin/login", loginAdmin);

// export the router
module.exports = router;
