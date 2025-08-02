



const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { registerUser, loginUser } = require("../controllers/userController");

router.post("/register", upload.single("profilePic"), registerUser);
router.post("/login", loginUser); // 👈 Add this

module.exports = router;
