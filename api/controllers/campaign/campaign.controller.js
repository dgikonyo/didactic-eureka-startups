import CampaignService from '../../services/campaign/campaign.service.js';

export default class CampaignController {
  async createCampaign(req, res) {
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
    const campaignService = new CampaignService();
    return await campaignService.getSingleCampaign(req, res);
  }

  async updateCampaign(req, res) {
    console.log(`Attempt to update a campaign: ${JSON.stringify(req.body)}`);

    const campaignService = new CampaignService();
    return await campaignService.updateCampaignDetails(req, res);
  }
}
