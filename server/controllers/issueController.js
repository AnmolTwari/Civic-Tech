const Issue = require("../models/Issue");

exports.submitIssue = async (req, res) => {
  try {
    const { lat, lng, category, description, isAnonymous } = req.body;
    const photos = req.files.map(file => file.path);

    const newIssue = new Issue({
      lat,
      lng,
      category,
      description,
      isAnonymous: isAnonymous === "true",
      photos
    });

    await newIssue.save();

    res.status(201).json({ message: "Issue submitted successfully", issue: newIssue });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
