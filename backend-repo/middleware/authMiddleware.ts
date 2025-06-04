import { Request, Response, NextFunction } from "express";
import admin from "firebase-admin";
import { throwError } from "../utils/responsesHandler";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throwError("Unauthorized", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;

    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
