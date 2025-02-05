const Campaign = require('../../entities/campaign/campaign.model');
const ResponseService = require('../../utils/responses/responseUtils');
class UserService {
  /**
   * Fetches and returns a list of campaigns associated with the currently authenticated user.
   *
   * @param {Object} req The Express.js request object.
   * @param {Object} res The Express.js response object.
   * @returns {Promise<void>} A promise that resolves with a response sent to the client.
   */
  async listUserCampaigns(req, res) {
    try {
      const userCampaigns = await Campaign.find({
        user_id: req.user.id,
      });

      if (userCampaigns.length === 0) {
        return ResponseService.sendResponse(
          res,
          404,
          'NOT FOUND',
          'SUCCESS',
          'User has no campaigns'
        );
      }

      return ResponseService.sendResponse(
        res,
        200,
        'OK',
        'SUCCESSFUL',
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

module.exports = UserService;
