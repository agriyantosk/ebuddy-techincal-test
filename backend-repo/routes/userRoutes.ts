import express from "express";
import userControllers from "../controller/userControllers";

const userRoutes = express.Router();

userRoutes.get("/", userControllers.fetchUserData);
userRoutes.patch("/", userControllers.updateUserData);

export { userRoutes };
