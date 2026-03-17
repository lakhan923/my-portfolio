import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as mariadb from "mariadb";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Create a MariaDB connection pool
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 5,
});

// Test route
app.get("/", (req, res) => res.send("Portfolio backend running"));

// Api endpoint for contact form submission
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields required" });

  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(
      "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
      [name, email, message],
    );
    res.status(201).json({ message: "Message saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  } finally {
    if (conn) conn.release();
  }
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`),
);
