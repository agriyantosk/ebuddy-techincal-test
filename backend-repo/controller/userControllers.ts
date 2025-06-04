import { Request, Response, NextFunction } from "express";
import { fetchUserData, updateUserData } from "../repository/userCollection";
import { sendSuccess, throwError } from "../utils/responsesHandler";
import { IUser } from "../entities/user";

const userControllers = {
  fetchUserData: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (!user) throwError("User not found!", 404);
      const userData = await fetchUserData(user.uid);

      sendSuccess(res, userData, "Successfully fetched user!", 200);
    } catch (error) {
      next(error);
    }
  },

  updateUserData: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (!user) throwError("User not found!", 404);

      const { totalAverageWeightRatings, numberOfRents, recentlyActive } =
        req.body;
      const updatedData: IUser = {
        totalAverageWeightRatings,
        numberOfRents,
        recentlyActive,
      };

      await updateUserData(user.uid, updatedData);

      const newData = await fetchUserData(user.uid);
      sendSuccess(res, newData, "Successfully update user data!", 200);
    } catch (error) {
      next(error);
    }
  },
};

export default userControllers;
