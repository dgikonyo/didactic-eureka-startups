const jwt = require("jsonwebtoken");
const responseDto = require("../dto/response.dto");
const ResponseDto = require("../dto/response.dto");
const dotenv = require("dotenv");
// setup global config acess
dotenv.config();
const secret = process.env.JWT_SECRET_KEY;

class AuthMiddleware {
  async generateToken(user) {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    return jwt.sign(payload, secret, { expiresIn: "1h" });
  }

  async authenticateToken(req, res, next) {
    const responseDto = new ResponseDto();
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return unauthorizedResponse(
        res,
        responseDto,
        "Unauthorized access to resource!"
      );
    }
    const token = authHeader.split(" ")[1];

    if (!token) {
      return unauthorizedResponse(
        res,
        responseDto,
        "Unauthorized access to resource!"
      );
    }

    try {
      const user = jwt.verify(token, secret);

      if (!user) {
        return forbiddenResponse(res, responseDto, "Insufficient Permissions!");
      }

      req.user = user;
      next();
    } catch (error) {
      responseDto.setTimeStamp(new Date());
      responseDto.setStatusCode(590);
      responseDto.setStatusCodeDesc("INTERNAL SERVER ERROR");
      responseDto.setStatusCodeMessage("Failure");
      responseDto.setAdditionalData("Unauthorized access to resource!");

      return res.status(401).json(responseDto);
    }
  }

  unauthorizedResponse(res, responseDto, message) {
    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(401);
    responseDto.setStatusCodeDesc("UNAUTHORIZED");
    responseDto.setStatusCodeMessage("Failure");
    responseDto.setAdditionalData(message);

    return res.status(401).json(responseDto);
  }

  forbiddenResponse(res, responseDto, message) {
    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(403);
    responseDto.setStatusCodeDesc("FORBIDDEN");
    responseDto.setStatusCodeMessage("Failure");
    responseDto.setAdditionalData(message);

    return res.status(403).json(responseDto);
  }
}
module.exports = AuthMiddleware;
