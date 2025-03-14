import Campaign from '../../entities/campaign/campaign.model.js';
import ResponseService from '../../utils/responses/responseUtils.js';

export default class UserService {

  /*
    Loads the user's profile and the campaigns associated with him
  */
  async loadUserProfile(req, res) {
    
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
      const userCampaigns = await Campaign.findAll({ 
        where: { user_id: req.user.id },
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

}
