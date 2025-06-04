import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { userRoutes } from "../routes";
import authMiddleware from "../middleware/authMiddleware";
import errorHandler from "../middleware/errorHandler";

const app = express();
const port = process.env.PORT || 3000;

app.use(authMiddleware);
app.use("/api/user", userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
