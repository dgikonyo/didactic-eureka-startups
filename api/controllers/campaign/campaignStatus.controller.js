const CampaignStatus = require("../../entities/campaign/campaignStatus.model");
const CampaignStatusDto = require("../../dto/campaign/campaignStatus.dto");
const { plainToInstance } = require("class-transformer");
const ResponseDto = require("../../dto/response.dto");
const uuid = require("uuid");

class CampaignStatusController {
  /**
   * Creates a new campaign status.
   * @param {Object} req - The incoming request object containing campaign status data.
   * @param {Object} res - The outgoing response object for sending responses.
   * @param {Function} next - The next middleware function to be called.
   */
  async createStatus(req, res, next) {
    console.log(
      `Attempt to create campaign status: ${JSON.stringify(req.body)}`
    );

    const campaignStatusInstance = plainToInstance(CampaignStatusDto, req.body);
    const campaignStatusDto = new CampaignStatusDto();
    const responseDto = new ResponseDto();
    const isStatusAlreadyExists = await CampaignStatus.findOne({
      statusName: campaignStatusInstance.statusName,
    });

    if (isStatusAlreadyExists) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("Duplicate campaign status found");

      return res.status(400).json(responseDto);
    }

    if (campaignStatusInstance.getStatusName() == null) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("Input status name");

      return res.status(400).json(responseDto);
    } else {
      campaignStatusDto.setStatusName(campaignStatusInstance.statusName);

      let campaignStatus = new CampaignStatus(campaignStatusDto);
      try {
        const result = await campaignStatus.save();

        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(201);
        responseDto.setStatusCodeDesc("CAMPAIGN STATUS CREATED");
        responseDto.setStatusCodeMessage("Success");
        responseDto.setAdditionalData(result);

        res.status(201).json(responseDto);
      } catch (error) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(500);
        responseDto.setStatusCodeDesc("INTERNAL SERVER ERROR");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData(error.message);

        res.status(500).json(responseDto);
      }
    }
  }

  /**
   * Retrieves all campaign statuses.
   * @param {Object} req - The incoming request object.
   * @param {Object} res - The outgoing response object for sending responses.
   * @param {Function} next - The next middleware function to be called.
   */
  async getAllCampaignStatuses(req, res, next) {
    console.log(`Attempt to get campaign status: ${JSON.stringify(req.body)}`);

    const campaignStatusDto = new CampaignStatusDto();
    const responseDto = new ResponseDto();
    try {
      const campaignStatuses = await CampaignStatus.find({});
      console.log(campaignStatuses);

      if (campaignStatuses == null) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(404);
        responseDto.setStatusCodeDesc("NOT FOUND");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("No campaign statuses available");

        return res.status(404).json(responseDto);
      }

      const campaignStatusesDto = campaignStatuses.map(
        (campaignStatus) =>
          new campaignStatusDto(campaignStatus.id, campaignStatus.statusName)
      );

      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(200);
      responseDto.setStatusCodeDesc("SUCCESS");
      responseDto.setStatusCodeMessage("Success");
      responseDto.setAdditionalData(campaignStatusesDto);

      res.status(200).json(responseDto);
    } catch (error) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(500);
      responseDto.setStatusCodeDesc("INTERNAL SERVER ERROR");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData(error.message);

      res.status(500).json(responseDto);
    }
  }

  async updateStatus(req, res, next) {
    console.log(
      `Attempt to update a campaign status: ${JSON.stringify(req.body)}`
    );

    const campaignStatusInst = plainToInstance(LoginDto, req.body);
    const campaignStatusDto = new CampaignStatusDto();

    const isCampaignStatusExists = await CampaignStatus.find({
      id: campaignStatusInst.getStatusName(),
    });

    if (isCampaignStatusExists == null) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("BAD REQUEST");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("Campaign Status not found");

      res.status(404).json(responseDto);
    } else {
      try {
        campaignStatusDto.setStatusName(campaignStatusInst.statusName);

        const result = await CampaignStatus.findByIdAndUpdate(
          req.params.id,
          campaignStatusDto,
          { new: true }
        );

        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(200);
        responseDto.setStatusCodeDesc("OK");
        responseDto.setStatusCodeMessage("RESOURCE UPDATED");
        responseDto.setAdditionalData(result);

        res.status(500).json(responseDto);
      } catch (error) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(500);
        responseDto.setStatusCodeDesc("INTERNAL SERVER ERROR");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData(error.message);

        res.status(500).json(responseDto);
      }
    }
  }
}

module.exports = CampaignStatusController;
