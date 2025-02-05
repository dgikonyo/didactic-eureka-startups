const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const ResponseService = require('../utils/responses/responseUtils');
// setup global config acess
dotenv.config();
const secret = process.env.JWT_SECRET_KEY;

class AuthMiddleware {
  async generateToken(user) {
    const payload = {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      country_id: user.country_id,
    };

    return jwt.sign(payload, secret, { expiresIn: '1h' });
  }

  async authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return ResponseService.sendResponse(
        res,
        400,
        'BAD REQUEST',
        'INVALID HEADER',
        'FAILURE'
      );
    }
    const token = authHeader.split(' ')[1];

    if (!token) {
      return ResponseService.sendResponse(
        res,
        400,
        'BAD REQUEST',
        'INVALID TOKEN',
        'FAILURE'
      );
    }

    try {
      const user = jwt.verify(token, secret);

      if (!user) {
        return ResponseService.sendResponse(
          res,
          403,
          'FORBIDDEN',
          'UNAUTHORIZED ACCESS TO TOKEN',
          'FAILURE'
        );
      }

      req.user = user;
      next();
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
module.exports = AuthMiddleware;
