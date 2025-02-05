import express from 'express';
import CampaignStatusController from '../../controllers/campaign/campaignStatus.controller.js';
import CampaignController from '../../controllers/campaign/campaign.controller.js';

const router = express.Router();
const campaignController = new CampaignController();
const campaignStatusController = new CampaignStatusController();

// campaign routes
router.post(
  '/create',
  campaignController.createCampaign.bind(campaignController)
);
router.post(
  '/verified/show',
  campaignController.getVerifiedCampaigns.bind(campaignController)
);
router.post(
  '/show',
  campaignController.getCampaignsPerCountry.bind(campaignController)
);
router.post('/', campaignController.showCampaign.bind(campaignController));
router.put(
  '/update',
  campaignController.updateCampaign.bind(campaignController)
);

// campaign status routes
router.post(
  '/campaign-statuses/create',
  campaignStatusController.createStatus.bind(campaignStatusController)
);
router.get(
  '/campaign-statuses/show',
  campaignStatusController.getAllCampaignStatuses.bind(campaignStatusController)
);
router.patch(
  '/campaign-statuses/update',
  campaignStatusController.updateStatus.bind(campaignStatusController)
);

export default router;
