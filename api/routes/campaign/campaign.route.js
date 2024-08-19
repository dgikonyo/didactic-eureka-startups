const express = require("express");
const CampaignStatusController = require("../../controllers/campaign/campaignStatus.controller");
const CampaignController = require("../../controllers/campaign/campaign.controller");
const router = express.Router();

const campaignController = new CampaignController();
const campaignStatusController = new CampaignStatusController();

// campaign routes
router.post("/create", campaignController.createCampaign.bind(campaignController));
router.post("/verified/show", campaignController.getVerifiedCampaigns.bind(campaignController));
<<<<<<< HEAD
router.post("/show", campaignController.getCampaignsPerCountry.bind(campaignController));
router.post("/campaign/:id", campaignController.showCampaign.bind(campaignController));
=======
router.post("/show", campaignController.getCampaigns.bind(campaignController));
router.post("/user/show", campaignController.getUserCampaigns.bind(campaignController));
router.post("/campaign/:id", campaignController.getCampaigns.bind(campaignController));
>>>>>>> fcbcf71 (changed structure)

// campaign status routes
router.post("/campaign-statuses/create", campaignStatusController.createStatus.bind(campaignStatusController));
router.get("/campaign-statuses/show", campaignStatusController.getAllCampaignStatuses.bind(campaignStatusController));
router.patch("/campaign-statuses/update", campaignStatusController.updateStatus.bind(campaignStatusController));

module.exports = router;
