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
    const registrationInstance = plainToInstance(RegisterDto, req.body);
    const registrationDto = new RegisterDto();

    const validationErrors = this.validateRegistration(registrationInstance);
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
      const isEmailAlreadyExist = await User.findOne({where :{email: registrationInstance.email} });
      
      if (isEmailAlreadyExist) {
        return ResponseService.sendResponse(
          res,
          400,  
          'BAD REQUEST',
          'FAILURE',
          'Duplicate email found'
        );
      }

      const hashedPassword = await bcrypt.hash(registrationInstance.password, 12);

      registrationDto.setUsername(registrationInstance.username);
      registrationDto.setFirstName(registrationInstance.firstName);
      registrationDto.setLastName(registrationInstance.lastName);
      registrationDto.setEmail(registrationInstance.email);
      registrationDto.setDateOfBirth(registrationInstance.dateOfBirth);
      registrationDto.setEmail(registrationInstance.email);
      registrationDto.setCountryId(registrationInstance.country_id);
      registrationDto.setPassword(hashedPassword);
      registrationDto.setRoleId(1);
      registrationDto.setCreatedAt(new Date);
      registrationDto.setUpdatedAt(new Date);

      console.log(`Attempt to sign up a user: ${JSON.stringify(registrationDto)}`);
      const result = await User.create(registrationDto);

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
      const user = await User.findOne({ where: {email: loginDto.getEmail()} });

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
        id:user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role_id,
        country_id: user.country_id
      };

      const hashedLogin = await bcrypt.hash(loginDto.getPassword(), 12);

      console.log(`Attempt to sign up a user: ${JSON.stringify(loginDto.getEmail(), hashedLogin)}`);

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
