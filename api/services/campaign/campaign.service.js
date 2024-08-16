const { plainToInstance } = require("class-transformer");
const Campaign = require("../../entities/campaign/campaign.model");
const CampaignDto = require("../../dto/campaign/campaign.dto");
const ResponseService = require("../../utils/responses/responseUtils");

class CampaignService {
  async createCampaign(req, res) {
    const campaignInstance = plainToInstance(CampaignDto, req.body);
    const userId = req.user.id;

    const validationErrors = await this.validateCampaign(campaignInstance, userId);
    if (validationErrors.length > 0) {
      ResponseService.sendResponse(res, 400, "BAD REQUEST", "FAILURE", validationErrors.join(", "));
    }
    try {
      const isCampaignExists = await Campaign.findOne({
        title: campaignInstance.title,
      });
      if (isCampaignExists) {
        return ResponseService.sendResponse(res, 400, "BAD REQUEST", "FAILURE", "Duplicate campaign name found");
      }

      const campaignDto = this.mapCampaignDto(campaignInstance, userId);
      const campaign = new Campaign(campaignDto);
      const result = await campaign.save();

      return ResponseService.sendResponse(res, 201, "CAMPAIGN CREATED", "Success", result);
    } catch (error) {
      return ResponseService.sendResponse(res, 500, "INTERNAL SERVER ERROR", "FAILURE", error.message);
    }
  }

  async listVerifiedCampaigns(req, res) {
    console.log(req.user);

  }

  async listCampaigns(req, res) { }

  static validateCampaign(campaignInstance, userId) {
    const errors = [];
    if (!campaignInstance.title) errors.push("Input campaign title");
    if (!campaignInstance.startDate) errors.push("Input campaign start date");
    if (!campaignInstance.endDate) errors.push("Input campaign end date");
    if (!campaignInstance.duration) errors.push("Input campaign duration");
    if (!campaignInstance.targetAmount) errors.push("Input campaign target amount");
    if (!campaignInstance.story) errors.push("Input campaign story");
    if (!campaignInstance.fundingModel) errors.push("Input campaign funding model");
    if (!campaignInstance.campaignStatus) errors.push("Campaign status missing");
    if (!userId) errors.push("Input user id");
    return errors;
  }

  static mapCampaignDto(campaignInstance, userId) {
    // Directly return a new CampaignDto with mapped values
    return new CampaignDto({
      title: campaignInstance.title,
      tagLine: campaignInstance.tagLine,
      startDate: campaignInstance.startDate,
      endDate: campaignInstance.endDate,
      duration: campaignInstance.duration,
      targetAmount: campaignInstance.targetAmount,
      videoUrl: campaignInstance.videoUrl,
      videoOverlayUrl: campaignInstance.videoOverlayUrl,
      story: campaignInstance.story,
      supportEmail: campaignInstance.supportEmail,
      fundingModel: campaignInstance.fundingModel,
      userId: userId,
      campaignStatus: campaignInstance.campaignStatus
    });
  }

  static sendResponse(res, statusCode, statusDesc, statusMessage, additionalData) {
    const responseDto = new ResponseDto();

    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(statusCode);
    responseDto.setStatusCodeDesc(statusDesc);
    responseDto.setStatusCodeMessage(statusMessage);
    responseDto.setAdditionalData(additionalData);

    return res.status(statusCode).json(responseDto);
  }
}
module.exports = CampaignService;