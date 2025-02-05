const CampaignService = require('../../services/campaign/campaign.service');

class CampaignController {
  async createCampaign(req, res) {
    console.log(
      `Attempt to create a new campaign: ${JSON.stringify(req.body)}`
    );

    const campaignService = new CampaignService();
    return await campaignService.createCampaign(req, res);
  }

  async getVerifiedCampaigns(req, res) {
    console.log(
      `Attempt to list verified campaigns: ${JSON.stringify(req.body)}`
    );

    const campaignService = new CampaignService();
    return await campaignService.listVerifiedCampaigns(req, res);
  }

  async getCampaignsPerCountry(req, res) {
    console.log(`Attempt to list all campaigns: ${JSON.stringify(req.body)}`);

    const campaignService = new CampaignService();
    return await campaignService.listCampaignsPerCountry(req, res);
  }

  async showCampaign(req, res) {
    console.log(`Attempt to get campaign: ${JSON.stringify(req.body)}`);

    const campaignService = new CampaignService();
    return await campaignService.getSingleCampaign(req, res);
  }
}

module.exports = CampaignController;
