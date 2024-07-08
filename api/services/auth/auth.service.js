const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const RegisterDto = require("../../dto/auth/register.dto");
const LoginDto = require("../../dto/auth/login.dto");
const User = require("../../entities/users.model");
const ResponseDto = require("../../dto/response.dto");

class AuthService {
  async createUser(userData) {
    if (userData == null) {
      return null;
    }

    const {
      username,
      firstname,
      lastname,
      email,
      dateOfBirth,
      country_id,
      password,
      createdAt,
      updatedAt,
    } = userData;

    const registerDto = new RegisterDto(
      username,
      firstname,
      lastname,
      email,
      dateOfBirth,
      country_id,
      password,
      createdAt,
      updatedAt
    );

    if (registerDto.username == null) {
    }

    const user = new User(registerDto);

    await user.save();

    return user;
  }
}
