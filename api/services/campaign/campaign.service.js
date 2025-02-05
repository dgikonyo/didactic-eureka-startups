const { plainToInstance } = require('class-transformer');
const Campaign = require('../../entities/campaign/campaign.model');
const CampaignDto = require('../../dto/campaign/campaign.dto');
const ResponseService = require('../../utils/responses/responseUtils');
const ResponseDto = require('../../dto/response.dto');

class CampaignService {
  /**
   * Creates a new campaign.
   *
   * This method handles the creation of a new campaign by performing the following steps:
   *   1. Validates the request body using the `validateCampaign` method.
   *   2. Checks for duplicate campaign names.
   *   3. Populates a `CampaignDto` object with the request data.
   *   4. Creates a new `Campaign` instance from the `CampaignDto`.
   *   5. Saves the new campaign to the database.
   *   6. Sends a success response with the created campaign data.
   *
   * @param {Object} req The Express request object containing the campaign data.
   * @param {Object} res The Express response object.
   * @returns {Promise} A promise that resolves with the response object.
   */
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
        'BAD REQUEST',
        'FAILURE',
        validationErrors.join(', ')
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
          'BAD REQUEST',
          'FAILURE',
          'Duplicate campaign name found'
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
        'CAMPAIGN CREATED',
        'Success',
        result
      );
    } catch (error) {
      return ResponseService.sendResponse(
        res,
        500,
        'INTERNAL SERVER ERROR',
        'FAILURE',
        error.message
      );
    }
  }

  /**
   * Lists verified campaigns based on the specified campaign status.
   *
   * This function retrieves campaigns from the database with the given campaign status.
   * If no campaigns are found, a 404 "Not Found" response is sent.
   * Otherwise, a 200 "OK" response is sent with the list of verified campaigns.
   *
   * @param {Object} req The Express request object.
   * @param {Object} res The Express response object.
   */
  async listVerifiedCampaigns(req, res) {
    try {
      const verifiedCampaigns = await Campaign.find({
        campaignStatus: req.body.campaignStatus,
      });

      if (!verifiedCampaigns) {
        return ResponseService.sendResponse(
          res,
          404,
          'NOT FOUND',
          'FAILURE',
          'No campaigns found'
        );
      }

      return ResponseService.sendResponse(
        res,
        200,
        'OK',
        'SUCCESS',
        verifiedCampaigns
      );
    } catch (error) {
      return ResponseService.sendResponse(
        res,
        500,
        'INTERNAL SERVER ERROR',
        'FAILURE',
        error.message
      );
    }
  }

  /**
   * @async
   * @brief Lists all campaigns associated with the requesting user.
   *
   * This function retrieves a list of all campaigns where the `user_id`
   * field matches the user ID extracted from the request object (`req`).
   * On success, it sends a response with status code 200 (OK) and the list
   * of campaigns in the response body. If no campaigns are found for the
   * user, it sends a 404 (NOT FOUND) response with an appropriate message.
   * On any error, it sends a 500 (INTERNAL SERVER ERROR) response.
   *
   * @param {Object} req The Express request object.
   * @param {Object} res The Express response object.
   * @return {Promise} A promise that resolves with the response object.
   */
  async listUserCampaigns(req, res) {
    try {
      const userCampaigns = await Campaign.find({ user_id: req.user.id });

      if (!userCampaigns) {
        return ResponseService.sendResponse(
          res,
          404,
          'NOT FOUND',
          'FAILURE',
          'User has no campaigns'
        );
      }

      return ResponseService.sendResponse(
        res,
        200,
        'OK',
        'SUCCESS',
        userCampaigns
      );
    } catch (error) {
      return ResponseService.sendResponse(
        res,
        500,
        'INTERNAL SERVER ERROR',
        'FAILURE',
        error.message
      );
    }
  }

  /**
   * Lists campaigns for a specific country.
   *
   * This function retrieves a list of campaigns that are either "trusted" or
   * "verified" and belong to the country specified in the request body.
   *
   * @param {Object} req The Express request object containing the country ID.
   * @param {Object} res The Express response object.
   * @returns {Promise} A promise that resolves with the response object.
   */
  async listCampaignsPerCountry(req, res) {
    try {
      const campaigns = await Campaign.find({
        $or: [{ campaignStatus: 'trusted' }, { campaignStatus: 'verified' }],
        countryId: req.body.countryId,
      });

      if (campaigns.length === 0) {
        return ResponseService.sendResponse(
          res,
          404,
          'NOT FOUND',
          'FAILURE',
          'There are no campaigns, atleast not yet!'
        );
      }

      return ResponseService.sendResponse(
        res,
        200,
        'OK',
        'SUCCESSFUL',
        campaigns
      );
    } catch (error) {
      return ResponseService.sendResponse(
        res,
        500,
        'INTERNAL SERVER ERROR',
        'FAILURE',
        error.message
      );
    }
  }

  /**
   * Retrieves details of a single campaign.
   *
   * This function fetches a campaign based on the ID provided in the request body.
   *
   * @param {Object} req The Express request object containing the campaign ID.
   * @param {Object} res The Express response object.
   * @returns {Promise} A promise that resolves with the response object.
   */
  async getSingleCampaign(req, res) {
    try {
      const campaign = await Campaign.find({ id: req.body.id });

      if (campaign.length === 0) {
        return ResponseService.sendResponse(
          res,
          404,
          'NOT FOUND',
          'FAILURE',
          'INVALID CAMPAIGN INFO ENTERED'
        );
      }
    } catch (error) {
      return ResponseService.sendResponse(
        res,
        500,
        'INTERNAL SERVER ERROR',
        'FAILURE',
        error.message
      );
    }
  }

  /**
   * Validates a campaign instance.
   *
   * This function validates a campaign instance to ensure that all required fields are present and valid.
   *
   * @param {Object} campaignInstance The campaign instance to validate.
   * @param {number} userId The user ID associated with the campaign.
   * @returns {Array} An array of error messages if any validation errors are found.
   */
  validateCampaign(campaignInstance, userId) {
    const errors = [];
    if (!campaignInstance.title) errors.push('Input campaign title');
    if (!campaignInstance.startDate) errors.push('Input campaign start date');
    if (!campaignInstance.endDate) errors.push('Input campaign end date');
    if (!campaignInstance.duration) errors.push('Input campaign duration');
    if (!campaignInstance.targetAmount) errors.push('Input campaign target amount');
    if (!campaignInstance.story) errors.push('Input campaign story');
    if (!campaignInstance.fundingModel) errors.push('Input campaign funding model');
    if (!campaignInstance.campaignStatus) errors.push('Campaign status missing');
    if (!userId) errors.push('Input user id');
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
