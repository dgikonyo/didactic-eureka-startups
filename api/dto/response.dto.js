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

  get getTimeStamp() {
    return this.timestamp;
  }

  set setTimeStamp(timestamp) {
    this.timestamp = timestamp;
  }

  get getStatusCode() {
    return this.statusCode;
  }

  set setStatusCode(statusCode) {
    this.statusCode = statusCode;
  }

  get getStatusCodeDesc() {
    return this.statusCodeDesc;
  }

  set setStatusCodeDesc(statusCodeDesc) {
    this.statusCodeDesc = statusCodeDesc;
  }

  get getStatusCodeMessage() {
    return this.statusCodeMessage;
  }

  set setStatusCodeMessage(statusCodeMessage) {
    this.statusCodeMessage = statusCodeMessage;
  }

  get getAdditionalData() {
    return this.additionalData;
  }

  set setAdditionalData(additionalData) {
    this.additionalData = additionalData;
  }
}
