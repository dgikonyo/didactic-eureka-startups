// imports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const AuthRoutes = require("./api/routes/auth/auth.routes");
const ServerRoute = require("./api/routes/server.route");
const CampaignRoutes = require("./api/routes/campaign/campaign.route");
const serverTest = require("./api/routes/server.route");
const app = express();
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const AuthMiddleware = require("./api/middleware/auth.middleware");
const authMiddleware = new AuthMiddleware();

// setup global config acess
dotenv.config();

// declaratinos
let PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// database connection
const username = encodeURIComponent(process.env.DB_USER_NAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const cluster_name = encodeURIComponent(process.env.DB_CLUSTER_NAME);
const app_name = encodeURIComponent(process.env.DB_APP_NAME);

// mongodb connnection
const uri = `mongodb+srv://${username}:${password}@${cluster_name}.d8hy7uz.mongodb.net/?retryWrites=true&w=majority&appName=${app_name}`;

mongoose
  .connect(uri)
  .then(() =>
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    )
  )
  .catch((err) => console.log(err));

// mount routes
app.get(
  "/api/v1/ping",
  (req, res, next) => authMiddleware.authenticateToken(req, res, next),
  serverTest
);
app.use("/api/v1/auth", AuthRoutes);
app.use(
  "/api/v1/campaigns",
  (req, res, next) => authMiddleware.authenticateToken(req, res, next),
  CampaignRoutes
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/v1`);
});
