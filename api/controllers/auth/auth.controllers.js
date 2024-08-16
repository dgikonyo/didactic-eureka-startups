const AuthService = require("../../services/auth/auth.service");

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }
  /**
   * Registers a new user.
   * @param {Object} req - The incoming request object containing user data.
   * @param {Object} res - The outgoing response object for sending responses.
   * @param {Function} next - The next middleware function to be called.
   */
  async signUp(req, res, next) {
    console.log(`Attempt to sign up a user: ${JSON.stringify(req.body)}`);

    const authService = new AuthService();
    return await authService.registerUser(req, res);
  }

  /**
   * Handles user login.
   * @param {Object} req - The incoming request object containing user credentials.
   * @param {Object} res - The outgoing response object for sending responses.
   * @param {Function} next - The next middleware function to be called.
   */
  async signIn(req, res, next) {
    console.log(`Attempt to sign in a user: ${JSON.stringify(req.body)}`);

    const authService = new AuthService();
    return await authService.loginUser(req, res);
  }
}

module.exports = AuthController;
