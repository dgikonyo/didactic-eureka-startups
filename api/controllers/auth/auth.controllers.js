const express = require("express");
const plainToClass = require("class-transformer");
const registerDecorator = require("class-validator");
const Validate = require("class-validator");
const User = require("../../entities/users.model");
const RegisterDto = require("../../dto/auth/register.dto");
const ResponseDto = require("../../dto/response.dto");
const router = express.Router();

exports.registerUser = async (req, res, next) => {
  console.log(`Attempt to register a user: {}`, req.body);

  const registrationDto = plainToClass(RegisterDto, req.body);
  const errors = await validate(registrationDto);
  let responseDto = new ResponseDto();

  if (errors.length > 0) {
    return res.status(400).json(errors);
  }
  if (registerDto.getUsername() === null) {
    responseDto.setTimestamp(new Date());
    responseDto.setStatusCode(400);
    responseDto.setStatusCodeDesc("Bad Request");
    responseDto.setStatusMessage("Failure");
    responseDto.setAdditionalData("Username missing");

    return res.status(400).json({ responseDto });
  } else if (registrationDto.getFirstName() === null) {
    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(400);
    responseDto.setStatusCodeDesc("Bad Request");
    responseDto.setStatusCodeMessage("Failure");
    responseDto.setAdditionalData("First Name missing");

    return res.status(400).json({ responseDto });
  } else if (registrationDto.getLastName() === null) {
    responseDto.setTimestamp(new Date());
    responseDto.setStatusCode(400);
    responseDto.setStatusCodeDesc("Bad Request");
    responseDto.setStatusMessage("Failure");
    responseDto.setAdditionalData("Last Name missing");

    return res.status(400).json({ responseDto });
  } else if (registrationDto.getEmail() === null) {
    responseDto.setTimestamp(new Date());
    responseDto.setStatusCode(400);
    responseDto.setStatusCodeDesc("Bad Request");
    responseDto.setStatusMessage("Failure");
    responseDto.setAdditionalData("Email missing");

    return res.status(400).json({ responseDto });
  } else if (registrationDto.getPassword() === null) {
    responseDto.setTimestamp(new Date());
    responseDto.setStatusCode(400);
    responseDto.setStatusCodeDesc("Bad Request");
    responseDto.setStatusMessage("Failure");
    responseDto.setAdditionalData("Password missing");

    return res.status(400).json({ responseDto });
  } else {
    let user = new User(registrationDto);

    try {
      const result = await user.save();

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
