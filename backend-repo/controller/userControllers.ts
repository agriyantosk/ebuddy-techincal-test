import { Request, Response, NextFunction } from "express";
import { fetchUserData, updateUserData } from "../repository/userCollection";
import { sendSuccess, throwError } from "../utils/responsesHandler";

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
      const updatedData = {
        totalAverageWeightRatings,
        numberOfRents,
        recentlyActive,
      };

      const updateUser = await updateUserData(user.uid, updatedData);
      sendSuccess(res, updateUser, "Successfully update user data!", 200);
    } catch (error) {
      next(error);
    }
  },
};

export default userControllers;
