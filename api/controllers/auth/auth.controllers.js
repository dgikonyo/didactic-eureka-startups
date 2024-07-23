const { plainToInstance } = require("class-transformer");
const User = require("../../entities/users.model");
const RegisterDto = require("../../dto/auth/register.dto");
const LoginDto = require("../../dto/auth/login.dto");
const ResponseDto = require("../../dto/response.dto");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
  /**
   * Registers a new user.
   * @param {Object} req - The incoming request object containing user data.
   * @param {Object} res - The outgoing response object for sending responses.
   * @param {Function} next - The next middleware function to be called.
   */
  async registerUser(req, res, next) {
    console.log(`Attempt to register a user: ${JSON.stringify(req.body)}`);

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
        responseDto.setAdditionalData(result);

        return res.status(201).json(responseDto);
      } catch (error) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(500);
        responseDto.setStatusCodeDesc("INTERNAL SERVER ERROR");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData(error.message);

        return res.status(500).json(responseDto);
      }
    }
  }

  /**
   * Handles user login.
   * @param {Object} req - The incoming request object containing user credentials.
   * @param {Object} res - The outgoing response object for sending responses.
   * @param {Function} next - The next middleware function to be called.
   */
  async loginUser(req, res, next) {
    console.log(`Attempt to sign in a user: ${JSON.stringify(req.body)}`);

    const loginDto = plainToInstance(LoginDto, req.body);
    const responseDto = new ResponseDto();

    try {
      const user = await User.findOne({ email: loginDto.getEmail() });

      if (!user) {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("BAD REQUEST");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Email or password not found");

        return res.status(404).json(responseDto);
      } else if (await bycrpt.compare(loginDto.getPassword(), user.password)) {
        const tokenPayload = {
          email: user.email,
        };

        const accessToken = jwt.sign(tokenPayload, "SECRET");

        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(200);
        responseDto.setStatusCodeDesc("USER SIGN IN SUCCESSFUL");
        responseDto.setStatusCodeMessage("Success");
        responseDto.setAdditionalData(accessToken);

        return res.status(200).json(responseDto);
      } else {
        responseDto.setTimeStamp(new Date());
        responseDto.setStatusCode(400);
        responseDto.setStatusCodeDesc("BAD REQUEST");
        responseDto.setStatusCodeMessage("Failure");
        responseDto.setAdditionalData("Email or password not found");

        return res.status(400).json(responseDto);
      }
    } catch (error) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(500);
      responseDto.setStatusCodeDesc("INTERNAL SERVER ERROR");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData(error.message);

      return res.status(500).json(responseDto);
    }
  }
}

module.exports = AuthController;
