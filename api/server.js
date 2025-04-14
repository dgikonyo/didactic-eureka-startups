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
import ResponseService from './utils/responses/responseUtils.js';
// database
import sequelize from './config/database.config.js';
// middleware
import AuthMiddleware from './middleware/auth.middleware.js';
// setup global config acess
dotenv.config();

// declarations
const PORT = process.env.PORT || 3000;
const authMiddleware = new AuthMiddleware();
const responseService = new ResponseService();

// Middleware to parse JSON bodies
const app = express();
app.use(express.json());
app.use(cors());
app.use(responseService.logger);

// database connection
sequelize.sync().then(() => {
  console.log('✅ Database synced');
}).catch((err) => {
  console.error('❌ Error syncing database:', err);
});

// mount routes
app.get('/api/v1/ping', (req, res, next) => authMiddleware.authenticateToken(req, res, next), serverTest);
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/campaigns', (req, res, next) => authMiddleware.authenticateToken(req, res, next), CampaignRoutes);
app.use('/api/v1/users', (req, res, next) => authMiddleware.authenticateToken(req, res, next),UserRoutes);

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
  console.log(`🚀 Server running on port ${PORT}`);
});