import UserService from '../../services/user/user.service.js';

export default class UserController {
  async getUserCampaigns(req, res) {
    console.log(
      `Attempt to fetch all campaigns belonging to user: ${JSON.stringify(req.body)}`
    );

    const userService = new UserService();
    return await userService.listUserCampaigns(req, res);
  }
}
