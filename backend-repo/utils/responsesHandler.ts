import { Response } from "express";

export function sendSuccess(
  res: Response,
  data: any,
  message = "Success",
  statusCode = 200
) {
  res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
}

export function throwError(message: string, statusCode = 500): never {
  const err = new Error(message);
  (err as any).statusCode = statusCode;
  throw err;
}

export class HttpError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}
