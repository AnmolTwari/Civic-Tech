const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { submitIssue } = require("../controllers/issueController");

router.post("/", upload.array("photos", 5), submitIssue);

module.exports = router;
