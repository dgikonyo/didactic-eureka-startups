const express = require("express");
const AuthController = require("../../controllers/auth/auth.controllers");
const router = express.Router();

const authController = new AuthController();

router.post("/register/users", authController.registerUser.bind(authController));

module.exports = router;
