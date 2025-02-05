// imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process';
import path from 'path';
import swaggerUI from 'swagger-ui-express';
import { swaggerSpec } from './swagger.js';
//  routes
import AuthRoutes from './routes/auth/auth.routes.js';
import CampaignRoutes from './routes/campaign/campaign.route.js';
import UserRoutes from './routes/user/user.route.js';
import { serverTest } from './routes/server.route.js';
// database
import mongoose from 'mongoose';
// middleware
import AuthMiddleware from './middleware/auth.middleware.js';
// setup global config acess
dotenv.config();

// declarations
const PORT = process.env.PORT || 3000;
const authMiddleware = new AuthMiddleware();

// Middleware to parse JSON bodies
const app = express();
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
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  )
  .catch((err) => console.log(err));

// mount routes
app.get(
  '/api/v1/ping',
  (req, res, next) => authMiddleware.authenticateToken(req, res, next),
  serverTest
);
app.use('/api/v1/auth', AuthRoutes);
app.use(
  '/api/v1/campaigns',
  (req, res, next) => authMiddleware.authenticateToken(req, res, next),
  CampaignRoutes
);
app.use(
  '/api/v1/users',
  (req, res, next) => authMiddleware.authenticateToken(req, res, next),
  UserRoutes
);

// serve swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Serve static files from the Vue.js dist directory
const distPath = path.join(path.dirname('../frontend/dist'));
console.log('Static files served from:', distPath);
app.use(express.static(distPath));

// Catch-all route to serve the index.html file for any other routes
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  console.log('Serving index.html from:', indexPath);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Server Error');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/v1`);
});
