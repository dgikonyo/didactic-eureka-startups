import ResponseDto from '../../dto/response.dto.js';

export default class ResponseService {
  static sendResponse(
    res,
    statusCode,
    statusDesc,
    statusMessage,
    additionalData
  ) {
    const responseDto = new ResponseDto();

    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(statusCode);
    responseDto.setStatusCodeDesc(statusDesc);
    responseDto.setStatusCodeMessage(statusMessage);
    responseDto.setAdditionalData(additionalData);

    return res.status(statusCode).json(responseDto);
  }

  static logger(req, res, next){
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    next();
  }
}
