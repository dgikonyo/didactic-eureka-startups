const express = require('express');
const AuthController = require('../../controllers/auth/auth.controllers');
const router = express.Router();

const authController = new AuthController();

router.post(
  '/register/users',
  authController.signUp.bind(authController)
);
router.post('/sign-in', authController.signIn.bind(authController));

module.exports = router;
