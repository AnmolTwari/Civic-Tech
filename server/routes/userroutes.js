const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { registerUser } = require("../controllers/userController");

router.post("/register", upload.single("profilePic"), registerUser);

module.exports = router;
