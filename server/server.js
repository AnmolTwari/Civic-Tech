require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const issueRoutes = require("./routes/issueRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // serve images

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/issues", issueRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
