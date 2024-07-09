// imports
const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const AuthRoutes = require("./api/routes/auth/auth.routes");
const ServerRoute = require("./api/routes/server.route");
const app = express();
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");

// setup global config acess
dotenv.config();

// declaratinos
let PORT = process.env.PORT || 3000;
const username = encodeURIComponent(process.env.DB_USER_NAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const cluster_name = encodeURIComponent(process.env.DB_CLUSTER_NAME);

// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.json());

// mongodb connnection
const uri = `mongodb+srv://${username}:${password}@${cluster_name}.fgxlwny.mongodb.net/?retryWrites=true&w=majority&appName=${cluster_name}`;
mongoose
  .connect(uri)
  .then(() =>
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    )
  )
  .catch((err) => console.log(err));

// mount routes
app.use("/api/v1", ServerRoute);
app.use("/api/v1/auth", AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/v1 ...`);
});
