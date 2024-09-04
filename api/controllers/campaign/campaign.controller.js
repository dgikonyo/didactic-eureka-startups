const CampaignService = require("../../services/campaign/campaign.service");

class CampaignController {
  async createCampaign(req, res, next) {
    console.log(
      `Attempt to create a new campaign: ${JSON.stringify(req.body)}`
    );

    const campaignService = new CampaignService();
    return await campaignService.createCampaign(req, res);
  }

  async getVerifiedCampaigns(req, res, next) {
    console.log(
      `Attempt to list verified campaigns: ${JSON.stringify(req.body)}`
    );

    const campaignService = new CampaignService();
    return await campaignService.listVerifiedCampaigns(req, res);
  }

  async getCampaignsPerCountry(req, res, next) {
    console.log(`Attempt to list all campaigns: ${JSON.stringify(req.body)}`);

    const campaignService = new CampaignService();
    return await campaignService.listCampaignsPerCountry(req, res);
  }

  async showCampaign(req, res, next) {
    console.log(`Attempt to get campaign: ${JSON.stringify(req.body)}`);

    const campaignService = new CampaignService();
    return await campaignService.getSingleCampaign(req, res);
  }

  async getUserCampaigns(req, res, next) {
    console.log(
      `Attempt to fetch all campaigns belonging to user: ${JSON.stringify(req.body)}`
    );

    const campaignService = new CampaignService();
    return await campaignService.listUserCampaigns(req, res);
  }
}

module.exports = CampaignController;
