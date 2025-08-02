const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema(
  {
    photos: [String],
    lat: Number,
    lng: Number,
    category: String,
    description: String,
    isAnonymous: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issue", IssueSchema);
