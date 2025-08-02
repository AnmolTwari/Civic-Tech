const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  try {
    const { fullName, username, email, phone, password } = req.body;
    const profilePic = req.file ? req.file.path : null;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      username,
      email,
      phone,
      password: hashedPassword,
      profilePic
    });

    await newUser.save();

    res.status(201).json({ message: "User registered", user: newUser });
  } catch (err) {
    res.status(500).json({ error: "User registration failed" });
  }
};
