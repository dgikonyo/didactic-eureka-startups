const { plainToInstance } = require("class-transformer");
const Campaign = require("../../entities/campaign/campaign.model");
const ResponseDto = require("../../dto/response.dto");
const CampaignDto = require("../../dto/campaign/campaign.dto");

class CampaignController {
  /**
   * create
   * read one
   * update
   *
   */
  async createCampaign(req, res, next) {
    console.log(`Attempt to create a new campaign: {}`, req.body);

    const campaignInstance = plainToInstance(CampaignDto, req.body);
    const responseDto = new ResponseDto();

    try {
      const isCampaignExists = await Campaign.findOne({
        title: campaignInstance.title,
      });

      if (isCampaignExists) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("Bad Request");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Duplicate campaign name found");

        return res.status(400).json(responseDto);
      }

      if (campaignInstance.getTitle() == null) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("Bad Request");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Input campaign title");

        return res.status(400).json(responseDto);
      } else if (campaignInstance.getStartDate() == null) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("Bad Request");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Input campaign start date");

        return res.status(400).json(responseDto);
      } else if (campaignInstance.getEndDate() == null) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("Bad Request");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Input campaign end date");

        return res.status(400).json(responseDto);
      } else if (campaignInstance.getDuration() == null) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("Bad Request");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Input campaign duration");

        return res.status(400).json(responseDto);
      } else if (campaignInstance.getTargetAmount() == null) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("Bad Request");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Input campaign target amount");

        return res.status(400).json(responseDto);
      } else if (campaignInstance.getStory() == null) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("Bad Request");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Input campaign story");

        return res.status(400).json(responseDto);
      } else if (campaignInstance.getFundingModel() == null) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("Bad Request");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Input campaign funding model");

        return res.status(400).json(responseDto);
      } else if (campaignInstance.getCampaignStatus() == null) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("Bad Request");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Campaign status missing");

        return res.status(400).json(responseDto);
      } else if (!req.user.id) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("Bad Request");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Input user id");

        return res.status(400).json(responseDto);
      } else {
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

        let campaign = new Campaign(campaignDto);
        const result = await campaign.save();

        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(201);
        responseDto.setStatusCodeDesc("CAMPAIGN CREATED");
        responseDto.setStatusCodeMessage("Success");
        responseDto.setAdditionalData(result);

        return res.status(201).json(responseDto);
      }
    } catch (error) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(500);
      responseDto.setStatusCodeDesc("INTERNAL SERVER ERROR");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData(error.message);

      return res.status(500).json(responseDto);
    }
  }
}

module.exports = CampaignController;
