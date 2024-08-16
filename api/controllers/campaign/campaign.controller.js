const CampaignService = require("../../services/campaign/campaign.service");

class CampaignController {

  async createCampaign(req, res, next) {
    console.log(`Attempt to create a new campaign: ${JSON.stringify(req.body)}`);

    const campaignService = new CampaignService();
    return await campaignService.createCampaign(req, res);
  }

  async getVerifiedCampaigns(req, res, next) {
    console.log(`Attempt to list verified campaigns: ${JSON.stringify(req.body)}`);

    const campaignService = new CampaignService();
    return await campaignService.listVerifiedCampaigns(req, res);
  }

  async getCampaigns(req, res, next) {
    console.log(`Attempt to list all campaigns: ${JSON.stringify(req.body)}`);

    const campaignService = new CampaignService();
    return await campaignService.listCampaigns(req, res);
  }
}

module.exports = CampaignController;
