require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const issueRoutes = require("./routes/issueRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("server/uploads"));
app.use("/api/users", userRoutes);
app.use(express.json());




mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/issues", issueRoutes);
app.use("/api/users", userRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
