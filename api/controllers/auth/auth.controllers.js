const express = require("express");
const { plainToInstance } = require("class-transformer");
const registerDecorator = require("class-validator");
const { Validate } = require("class-validator");
const User = require("../../entities/users.model");
const RegisterDto = require("../../dto/auth/register.dto");
const ResponseDto = require("../../dto/response.dto");
const bycrpt = require("bcrypt");

class AuthController {
  async registerUser(req, res, next) {
    console.log(`Attempt to register a user: {}`, req.body);

    const registrationDto = plainToInstance(RegisterDto, req.body);
    const register = new RegisterDto();
    const responseDto = new ResponseDto();
    const isEmailAlreadyExist = await User.findOne({
      email: registrationDto.email,
    });

    if (isEmailAlreadyExist) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("Duplicate email found");

      return res.status(400).json(responseDto);
    }

    if (registrationDto.username == null) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("Username missing");

      return res.status(400).json(responseDto);
    } else if (registrationDto.firstName == null) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("First Name missing");

      return res.status(400).json(responseDto);
    } else if (registrationDto.lastName == null) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("Last Name missing");

      return res.status(400).json({ responseDto });
    } else if (registrationDto.email == null) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("Email missing");

      return res.status(400).json(responseDto);
    } else if (registrationDto.password == null) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("Password missing");

      return res.status(400).json(responseDto);
    } else {
      register.setUsername(registrationDto.username);
      register.setFirstName(registrationDto.firstName);
      register.setLastName(registrationDto.lastName);
      register.setEmail(registrationDto.email);
      register.setDateOfBirth(registrationDto.dateOfBirth);
      register.setPassword(await bycrpt.hash(registrationDto.password, 12));
      register.setCountryId(registrationDto.country_id);
      register.setRoleId(registrationDto.role_id);

      let user = new User(register);

      try {
        const result = await user.save();

        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(201);
        responseDto.setStatusCodeDesc("USER CREATED");
        responseDto.setStatusCodeMessage("Success");
        responseDto.setAdditionalData(user);

        res.status(201).json(responseDto);
      } catch (error) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(500);
        responseDto.setStatusCodeDesc("INTERNAL SERVER ERROR");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData(error.message);

        res.status(500).json(responseDto);
      }
    }
  }

  async loginUser(req, res, next) {
    console.log(`A`)
  }
}

module.exports = AuthController;
