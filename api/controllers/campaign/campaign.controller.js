const { plainToInstance } = require("class-transformer");
const Campaign = require("../../entities/campaign/campaign.model");
class CampaignController {
  /**
   * create
   * read one
   * update
   *
   */
  async createCampaign(req, res, next) {
    console.log(`Attempt to create a new campaign: {}`, req.body);

    const campaignDto = new CampaignDto();
  }
}
