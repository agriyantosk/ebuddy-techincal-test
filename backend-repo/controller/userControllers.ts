import { Request, Response, NextFunction } from "express";
import { fetchUserData, updateUserData } from "../repository/userCollection";
import { sendSuccess, throwError } from "../utils/responsesHandler";
import { IUser } from "../entities/user";
import { UpdateUserSchema } from "../schemas/user.schema";

const userControllers = {
  fetchUserData: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (!user) throwError("User not found!", 404);

      const userData: IUser | null = await fetchUserData(user.uid);

      sendSuccess(res, userData, "Successfully fetched user!", 200);
    } catch (error) {
      next(error);
    }
  },

  updateUserData: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (!user) throwError("User not found!", 404);

      const parsed = UpdateUserSchema.safeParse(req.body);
      if (!parsed.success) throwError(parsed.error.message, 400);

      await updateUserData(user.uid, parsed.data);

      const newData: IUser | null = await fetchUserData(user.uid);
      sendSuccess(res, newData, "Successfully update user data!", 200);
    } catch (error) {
      next(error);
    }
  },
};

export default userControllers;
