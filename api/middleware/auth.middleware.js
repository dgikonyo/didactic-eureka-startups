const jwt = require("jsonwebtoken");
const responseDto = require("../dto/response.dto");
const ResponseDto = require("../dto/response.dto");

module.exports = (req, res, next) => {
  const responseDto = new ResponseDto();
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(401);
    responseDto.setStatusCodeDesc("UNAUTHORIZED");
    responseDto.setStatusCodeMessage("Failure");
    responseDto.setAdditionalData("Unauthorized access to resource!");

    return res.status(401).json(responseDto);
  }
  const token = authHeader.split(" ")[1];

  try {
    const user = jwt.verify(token, "SECRET");
    res.user = user;
    next();
  } catch (error) {
    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(401);
    responseDto.setStatusCodeDesc("UNAUTHORIZED");
    responseDto.setStatusCodeMessage("Failure");
    responseDto.setAdditionalData("Unauthorized access to resource!");

    return res.status(401).json(responseDto);
  }
};
