// imports
const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const AuthRoutes = require("./api/routes/auth/auth.routes");
const ServerRoute = require("./api/routes/server.route");
const serverTest = require("./api/routes/server.route");
const app = express();
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const database = require("./api/config/database.config");

// setup global config acess
dotenv.config();

// declaratinos
let PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.json());

// database connection

// mount routes
app.use("/api/v1/ping", serverTest);
app.use("/api/v1/auth", AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/v1`);
});
