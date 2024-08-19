const { plainToInstance } = require("class-transformer");
const Campaign = require("../../entities/campaign/campaign.model");
const CampaignDto = require("../../dto/campaign/campaign.dto");
const ResponseService = require("../../utils/responses/responseUtils");

class CampaignService {
  async createCampaign(req, res) {
    const campaignInstance = plainToInstance(CampaignDto, req.body);
    const campaignDto = new CampaignDto();
    const userId = req.user.id;

    const validationErrors = await this.validateCampaign(
      campaignInstance,
      userId
    );
    if (validationErrors.length > 0) {
      ResponseService.sendResponse(
        res,
        400,
        "BAD REQUEST",
        "FAILURE",
        validationErrors.join(", ")
      );
    }

    try {
      const isCampaignExists = await Campaign.findOne({
        title: campaignInstance.title,
      });
      if (isCampaignExists) {
        return ResponseService.sendResponse(
          res,
          400,
          "BAD REQUEST",
          "FAILURE",
          "Duplicate campaign name found"
        );
      }

      campaignDto.setTitle(campaignInstance.title);
      campaignDto.setTagLine(campaignInstance.tagLine);
      campaignDto.setStartDate(campaignInstance.startDate);
      campaignDto.setEndDate(campaignInstance.endDate);
      campaignDto.setDuration(campaignInstance.duration);
      campaignDto.setTargetAmount(campaignInstance.targetAmount);
      campaignDto.setVideoUrl(campaignInstance.videoUrl);
      campaignDto.setVideoOverlayUrl(campaignInstance.videoOverlayUrl);
      campaignDto.setStory(campaignInstance.story);
      campaignDto.setSupportEmail(campaignInstance.supportEmail);
      campaignDto.setFundingModel(campaignInstance.fundingModel);
      campaignDto.setUserId(req.user.id);
      campaignDto.setCampaignStatus(campaignInstance.campaignStatus);
      campaignDto.setCountryId(campaignInstance.countryId);

      const campaign = new Campaign(campaignDto);
      const result = await campaign.save();

      return ResponseService.sendResponse(
        res,
        201,
        "CAMPAIGN CREATED",
        "Success",
        result
      );
    } catch (error) {
      return ResponseService.sendResponse(
        res,
        500,
        "INTERNAL SERVER ERROR",
        "FAILURE",
        error.message
      );
    }
  }

  async listVerifiedCampaigns(req, res) {
    try {
      const verifiedCampaigns = await Campaign.find({
        campaignStatus: req.body.campaignStatus,
      });

      console.log(verifiedCampaigns);
      if (!verifiedCampaigns) {
        return ResponseService.sendResponse(
          res,
          404,
          "NOT FOUND",
          "FAILURE",
          "No campaigns found from the country"
        );
      }

      return ResponseService.sendResponse(
        res,
        200,
        "OK",
        "SUCCESS",
        verifiedCampaigns
      );
    } catch (error) {
      return ResponseService.sendResponse(
        res,
        500,
        "INTERNAL SERVER ERROR",
        "FAILURE",
        error.message
      );
    }
  }

  async listUserCampaigns(req, res) {
    try {
      const userCampaigns = await Campaign.find({ user_id: req.user.id });

      if (!userCampaigns) {
        return ResponseService.sendResponse(
          res,
          404,
          "NOT FOUND",
          "FAILURE",
          "User has no campaigns"
        );
      }

      return ResponseService.sendResponse(
        res,
        200,
        "OK",
        "SUCCESS",
        userCampaigns
      );
    } catch (error) {
      return ResponseService.sendResponse(
        res,
        500,
        "INTERNAL SERVER ERROR",
        "FAILURE",
        error.message
      );
    }
  }

  async listCampaigns(req, res) {
    /**
     * list all trusted or verified campaigns
     */
    
    // const campaigns = await Campaign.find({
    //     campaignStatus: 
    // })
  }

  validateCampaign(campaignInstance, userId) {
    const errors = [];
    if (!campaignInstance.title) errors.push("Input campaign title");
    if (!campaignInstance.startDate) errors.push("Input campaign start date");
    if (!campaignInstance.endDate) errors.push("Input campaign end date");
    if (!campaignInstance.duration) errors.push("Input campaign duration");
    if (!campaignInstance.targetAmount)
      errors.push("Input campaign target amount");
    if (!campaignInstance.story) errors.push("Input campaign story");
    if (!campaignInstance.fundingModel)
      errors.push("Input campaign funding model");
    if (!campaignInstance.campaignStatus)
      errors.push("Campaign status missing");
    if (!userId) errors.push("Input user id");
    return errors;
  }

  static sendResponse(
    res,
    statusCode,
    statusDesc,
    statusMessage,
    additionalData
  ) {
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
