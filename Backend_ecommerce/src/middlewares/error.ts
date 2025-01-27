import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/utility-classes.js";
import { ControllerType } from "../types/types.js";

export const errorMiddleware = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // err.message = err.message || ""
  err.message ||= "Internal Server Error";
  err.statusCode ||= 500;
  return res.status(400).json({
    success: false,
    message: err.message,
  });
};

export const TryCatch =
  (func: ControllerType) =>
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(func(req, res, next)).catch(next);
  };
