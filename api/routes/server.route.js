const express = require("express");
const router = express.Router();
const ResponseDto = require("../dto/response.dto");

exports.serverTest = async (req, res, next) => {
  console.log("Attempt to access server");
  var responseDto = new ResponseDto();

  try {
    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(200);
    responseDto.setStatusCodeDesc("OK");
    responseDto.setStatusCodeMessage("Successful");
    responseDto.setAdditionalData("Server is up");

    res.status(200).json({ responseDto });
  } catch (err) {
    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(500);
    responseDto.setStatusCodeDesc("INTERNAL SERVER ERROR");
    responseDto.setStatusCodeMessage(err.message);
    responseDto.setAdditionalData("Server failure");

    res.status(500).json({ responseDto });
  }
};

module.exports = router;
