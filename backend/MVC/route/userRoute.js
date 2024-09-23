/** @format */

import express from "express";
import { loginController, registerController } from "../controller/userController.js";
import { createTaskController, getUserTask } from "../controller/taskController.js";

const userRouter = express.Router();

// login
userRouter.post("/login", loginController);
//register
userRouter.post("/register", registerController);
//create task
userRouter.post("/createTask", createTaskController);
//get task
userRouter.post("/getTask", getUserTask);

export default userRouter;
