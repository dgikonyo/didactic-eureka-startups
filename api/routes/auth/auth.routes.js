import express from 'express';
import AuthController from '../../controllers/auth/auth.controllers.js';

const router = express.Router();
const authController = new AuthController();

router.post('/register/users', authController.signUp.bind(authController));
router.post('/sign-in', authController.signIn.bind(authController));

export default router;
