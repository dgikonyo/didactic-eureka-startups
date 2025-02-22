import { plainToInstance } from 'class-transformer';
import Campaign from '../../entities/campaign/campaign.model.js';
import CampaignDto from '../../dto/campaign/campaign.dto.js';
import ResponseService from '../../utils/responses/responseUtils.js';
import ResponseDto from '../../dto/response.dto.js';

export default class CampaignService {
  /**
   * Creates a new campaign.
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

      // const campaign = new Campaign(campaignDto);
      const result = await Campaign.create(campaignDto);

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
   * @param {Object} req The Express request object.
   * @param {Object} res The Express response object.
   */
  async listVerifiedCampaigns(req, res) {
    try {
      const verifiedCampaigns = await Campaign.findAll({
        where: { campaignStatus: req.body.campaignStatus },
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
   * @param {Object} req The Express request object.
   * @param {Object} res The Express response object.
   * @return {Promise} A promise that resolves with the response object.
   */
  async listUserCampaigns(req, res) {
    try {
      const userId = req.user.id;
      const userCampaigns = await Campaign.findAll({ 
        where: { user_id: userId },
      });

      if (!userCampaigns || userCampaigns.length === 0) {
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

   * @param {Object} req The Express request object containing the country ID.
   * @param {Object} res The Express response object.
   * @returns {Promise} A promise that resolves with the response object.
   */
  async listCampaignsPerCountry(req, res) {
    try {
      const countryId = req.body.countryId;
      const campaigns = await Campaign.findAll({
        countryId: countryId,
        campaignStatus: {
          [Op.or]: ['trusted', 'verified'],
        },
      });

      if (!campaigns || campaigns.length === 0) {
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
      const id = req.body.id;
      const campaign = await Campaign.findOne({where: { id } });

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

  async updateCampaignDetails(req, res) {
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

      const [updatedRows, [updatedCampaign]] = await Campaign.update(campaignDto, {
        where: { id: req.body.id, userId }, // Ensure user owns the campaign
        returning: true // Get the updated campaign
      });

      if (!updateCampaign) {
        return ResponseService.sendResponse(
          res,
          400,
          'BAD REQUEST',
          'FAILURE',
          'COULD NOT UPDATE CAMPAIGN'
        );
      }

      return ResponseService.sendResponse(
        res,
        200,
        'CAMPAIGN UPDATED',
        'Success',
        updateCampaign
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
