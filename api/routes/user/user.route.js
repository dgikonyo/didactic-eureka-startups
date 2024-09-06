const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/user/user.controller");

const userController = new UserController();

router.get("/campaigns/show", userController.getUserCampaigns.bind(userController));

module.exports = router;
