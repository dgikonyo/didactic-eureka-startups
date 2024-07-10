const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require("dotenv");
dotenv.config();

const username = encodeURIComponent(process.env.DB_USER_NAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const cluster_name = encodeURIComponent(process.env.DB_CLUSTER_NAME);
const app_name = encodeURIComponent(process.env.DB_APP_NAME);

// mongodb connnection
const uri = `mongodb+srv://${username}:${password}@${cluster_name}.d8hy7uz.mongodb.net/?retryWrites=true&w=majority&appName=${app_name}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db(`${username}`).command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);