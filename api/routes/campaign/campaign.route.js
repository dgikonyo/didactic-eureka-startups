const express = require("express");
const CampaignStatusController = require("../../controllers/campaign/campaignStatus.controller");
const CampaignController = require("../../controllers/campaign/campaign.controller");
const router = express.Router();

const campaignController = new CampaignController();
const campaignStatusController = new CampaignStatusController();

// campaign routes

// campaign status routes
router.post(
  "/create",
  campaignStatusController.createStatus.bind(campaignStatusController)
);
router.get(
  "/show",
  campaignStatusController.getAllCampaignStatuses.bind(campaignStatusController)
);
router.patch(
  "/update/:id",
  campaignStatusController.updateStatus.bind(campaignStatusController)
);

module.exports = router;
