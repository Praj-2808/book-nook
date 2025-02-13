require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(express.json());
app.use(cors());

// PostgreSQL Database Connection
const pool = new Pool({
  user: "your_pg_username",
  host: "localhost",
  database: "booknook",
  password: "your_pg_password",
  port: 5432,
});

// Basic Route
app.get("/", (req, res) => {
  res.send("Book Nook API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
