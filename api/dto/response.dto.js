export class ResponseDto {
  timestamp;
  statusCode;
  statusCodeDesc;
  statusCodeMessage;
  additionalData;

  constructor(
    timestamp,
    statusCode,
    statusCodeDesc,
    statusCodeMessage,
    additionalData
  ) {
    this.timestamp = timestamp;
    this.statusCode = statusCode;
    this.statusCodeDesc = statusCodeDesc;
    this.statusCodeMessage = statusCodeMessage;
    this.additionalData = additionalData;
  }
}
