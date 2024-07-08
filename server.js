// imports
const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const app = express();

// setup global config acess
dotenv.config();
let PORT = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.send("Server working");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} ...`);
});
