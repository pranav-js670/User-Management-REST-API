const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_PASSWORD",
  database: "users"
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Failed to retrieve users" });
    } else {
      res.json(results);
    }
  });
});

app.post("/users", (req, res) => {
  const { first_name, last_name, email, gender } = req.body;
  const query = "INSERT INTO users (first_name, last_name, email, gender) VALUES (?, ?, ?, ?)";
  db.query(query, [first_name, last_name, email, gender], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Failed to add user" });
    } else {
      res.json({ id: results.insertId, ...req.body });
    }
  });
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, email, gender } = req.body;
  const query = "UPDATE users SET first_name = ?, last_name = ?, email = ?, gender = ? WHERE id = ?";
  db.query(query, [first_name, last_name, email, gender, id], (err) => {
    if (err) {
      res.status(500).json({ error: "Failed to update user" });
    } else {
      res.json({ id, ...req.body });
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM users WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) {
      res.status(500).json({ error: "Failed to delete user" });
    } else {
      res.json({ message: "User deleted successfully" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
