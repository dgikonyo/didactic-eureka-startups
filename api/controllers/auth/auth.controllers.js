const express = require("express");
const { plainToInstance } = require("class-transformer");
const registerDecorator = require("class-validator");
const { Validate } = require("class-validator");
const User = require("../../entities/users.model");
const { RegisterDto } = require("../../dto/auth/register.dto");
const ResponseDto = require("../../dto/response.dto");

class AuthController {
  async registerUser(req, res, next) {
    console.log(`Attempt to register a user: {}`, req.body);
    const registrationDto = plainToInstance(RegisterDto, req.body);
    // const errors = await Validate(registrationDto);
    const responseDto = new ResponseDto();

    // if (errors.length > 0) {
    //   return res.status(400).json({ errors });
    // }

    const isEmailAlreadyExist = await User.findOne({ email: registrationDto.email });

    if (isEmailAlreadyExist) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("Duplicate email found");

      return res.status(400).json({ responseDto });
    }

    if (registrationDto.username == null) {
      responseDto.setTimestamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusMessage("Failure");
      responseDto.setAdditionalData("Username missing");

      return res.status(400).json({ responseDto });
    } else if (registrationDto.firstName == null) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("First Name missing");

      return res.status(400).json({ responseDto });
    } else if (registrationDto.lastName == null) {
      responseDto.setTimestamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusMessage("Failure");
      responseDto.setAdditionalData("Last Name missing");

      return res.status(400).json({ responseDto });
    } else if (registrationDto.email == null) {
      responseDto.setTimestamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusMessage("Failure");
      responseDto.setAdditionalData("Email missing");

      return res.status(400).json({ responseDto });
    } else if (registrationDto.password == null) {
      responseDto.setTimestamp(new Date());
      responseDto.setStatusCode(400);
      responseDto.setStatusCodeDesc("Bad Request");
      responseDto.setStatusMessage("Failure");
      responseDto.setAdditionalData("Password missing");

      return res.status(400).json({ responseDto });
    } else {
      let user = new User(registrationDto);
      console.log("here");

      try {
        const result = await user.save();

        res.status(201).json(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  }
}

module.exports = AuthController;
