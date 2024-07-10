const mongoose = require("mongoose");
const username = encodeURIComponent(process.env.DB_USER_NAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const cluster_name = encodeURIComponent(process.env.DB_CLUSTER_NAME);
const app_name = encodeURIComponent(process.env.DB_APP_NAME);

const uri = `mongodb+srv://${username}:${password}@${cluster_name}.d8hy7uz.mongodb.net/?retryWrites=true&w=majority&appName=${app_name}`;
