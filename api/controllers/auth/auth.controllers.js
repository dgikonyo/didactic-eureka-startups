import AuthService from '../../services/auth/auth.service.js';

export default class AuthController {
  constructor() {
    this.authService = new AuthService();
  }
  /**
   * Registers a new user.
   * @param {Object} req - The incoming request object containing user data.
   * @param {Object} res - The outgoing response object for sending responses.
   */
  async signUp(req, res) {
    console.log(`Attempt to sign up a user: ${JSON.stringify(req.body)}`);

    const authService = new AuthService();
    return await authService.registerUser(req, res);
  }

  /**
   * Handles user login.
   * @param {Object} req - The incoming request object containing user credentials.
   * @param {Object} res - The outgoing response object for sending responses.
   */
  async signIn(req, res) {
    const authService = new AuthService();
    return await authService.loginUser(req, res);
  }
}
