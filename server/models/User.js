const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  phone: String,
  password: String, // Hashed password
  profilePic: String
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
