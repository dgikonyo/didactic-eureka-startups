export class Helper {
  HttpStatusCode = Object.freeze({
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    INTERNAL_SERVER: 500,
  });
}
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    /**
     * isOperational: Flag to distinguish between operational errors
     * (expected) and programmer errors (unexpected).
     */
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends AppError {
  constructor(message) {
    super(message, Helper.HttpStatusCode.OK);
  }
}

export class NotFoundError extends AppError {
  constructor(message) {
    super(message, Helper.HttpStatusCode.NOT_FOUND);
  }
}

export class InternalServerError extends AppError {
  constructor(message) {
    super(message, Helper.HttpStatusCode.INTERNAL_SERVER);
  }
}

export class ForbiddenError extends AppError {
  constructor(message) {
    super(message, Helper.HttpStatusCode.FORBIDDEN);
  }
}
