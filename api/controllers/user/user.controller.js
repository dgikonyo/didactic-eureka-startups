const UserService = require("../../services/user/user.service");

class UserController {
  async getUserCampaigns(req, res, next) {
    console.log(
      `Attempt to fetch all campaigns belonging to user: ${JSON.stringify(req.body)}`
    );

    const userService = new UserService();
    return await userService.listUserCampaigns(req, res);
  }
}
module.exports = UserController;
