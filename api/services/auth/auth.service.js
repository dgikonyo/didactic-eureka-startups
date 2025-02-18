import { plainToInstance } from 'class-transformer';
import User from '../../entities/users.model.js';
import RegisterDto from '../../dto/auth/register.dto.js';
import LoginDto from '../../dto/auth/login.dto.js';
import AuthMiddleware from '../../middleware/auth.middleware.js';
import bcrypt from 'bcrypt';
import ResponseService from '../../utils/responses/responseUtils.js';

export default class AuthService {
  constructor() {
    this.authMiddleware = new AuthMiddleware();
  }

  async registerUser(req, res) {
    const registrationDto = plainToInstance(RegisterDto, req.body);

    const validationErrors = this.validateRegistration(registrationDto);
    if ((await validationErrors).length > 0) {
      return ResponseService.sendResponse(
        res,
        400,
        'BAD REQUEST',
        'FAILURE',
        validationErrors.join(', ')
      );
    }

    try {
      const isEmailAlreadyExist = await User.findOne({
        email: registrationDto.email,
      });
      if (isEmailAlreadyExist) {
        return ResponseService.sendResponse(
          res,
          400,
          'BAD REQUEST',
          'FAILURE',
          'Duplicate email found'
        );
      }

      const hashedPassword = await bcrypt.hash(registrationDto.password, 12);
      const user = new User({
        ...registrationDto,
        password: hashedPassword,
      });
      const result = await user.save();

      return ResponseService.sendResponse(
        res,
        201,
        'USER CREATED',
        'SUCCESS',
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

  async loginUser(req, res) {
    const loginDto = plainToInstance(LoginDto, req.body);

    try {
      const user = await User.findOne({ email: loginDto.getEmail() });
      console.log(user);
      if (
        !user ||
        !(await bcrypt.compare(loginDto.getPassword(), user.password))
      ) {
        return ResponseService.sendResponse(
          res,
          400,
          'BAD REQUEST',
          'FAILURE',
          'Email or password not found'
        );
      }

      const userDetails = {

      }

      const accessToken = await this.authMiddleware.generateToken(userDetails);
      return ResponseService.sendResponse(
        res,
        200,
        'USER SIGN IN SUCCESSFUL',
        'Success',
        accessToken
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

  validateRegistration(registrationDto) {
    const errors = [];
    if (!registrationDto.username) errors.push('Username missing');
    if (!registrationDto.firstName) errors.push('First Name missing');
    if (!registrationDto.lastName) errors.push('Last Name missing');
    if (!registrationDto.email) errors.push('Email missing');
    if (!registrationDto.password) errors.push('Password missing');
    return errors;
  }
}
