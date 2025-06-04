import express from "express";
import userControllers from "../controller/userControllers";

const userRoutes = express.Router();

userRoutes.get("/", userControllers.fetchUserData);

export { userRoutes };
