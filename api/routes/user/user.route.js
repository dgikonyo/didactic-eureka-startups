import express from 'express';
import UserController from '../../controllers/user/user.controller.js';

const router = express.Router();
const userController = new UserController();

router.get(
  '/campaigns/show',
  userController.getUserCampaigns.bind(userController)
);

export default router;
