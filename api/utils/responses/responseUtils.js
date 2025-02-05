const ResponseDto = require('../../dto/response.dto.js');

class ResponseService {
  static sendResponse(res, statusCode, statusDesc, statusMessage, additionalData) {
    const responseDto = new ResponseDto();

    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(statusCode);
    responseDto.setStatusCodeDesc(statusDesc);
    responseDto.setStatusCodeMessage(statusMessage);
    responseDto.setAdditionalData(additionalData);

    return res.status(statusCode).json(responseDto);
  }
}

module.exports = ResponseService;