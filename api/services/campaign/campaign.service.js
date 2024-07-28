const { plainToInstance } = require("class-transformer");
const Campaign = require("../../entities/campaign/campaign.model");
const ResponseDto = require("../../dto/response.dto");
const CampaignDto = require("../../dto/campaign/campaign.dto");
const BadRequestError = require

class CampaignService {
    async createCampaign(campaignData, userId) {
        const campaignInstance = plainToInstance(CampaignDto, campaignData);
        const isCampaignExists = await Campaign.findOne({ title: campaignInstance.title });
    }
}