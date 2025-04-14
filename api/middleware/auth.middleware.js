import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import process from 'process';
import ResponseService from '../utils/responses/responseUtils.js';

// setup global config acess
dotenv.config();
const secret = process.env.JWT_SECRET_KEY;

export default class AuthMiddleware {
  async generateToken(user) {
    return jwt.sign(user, secret, { expiresIn: '1h' });
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
