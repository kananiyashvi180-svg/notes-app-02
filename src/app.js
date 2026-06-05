const express = require("express");
const connectDB = require("./config/db");
const noteRoutes = require("./routes/note.routes");

const app = express();

app.use(express.json());

// Connect to DB before handling requests (serverless-safe)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ success: false, message: "Database connection failed" });
  }
});

app.use("/api/notes", noteRoutes);

module.exports = app;