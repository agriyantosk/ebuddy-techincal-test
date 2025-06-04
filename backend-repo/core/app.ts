import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { userRoutes } from "../routes";

const app = express();
const port = process.env.PORT || 3000;

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
