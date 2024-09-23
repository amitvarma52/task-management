/** @format */

import { taskModel } from "../model/taskModel.js";

// create task
export const createTaskController = async (req, res) => {
  try {
    const newTask = new taskModel({
      ...req.body,
      date: Date.now(),
    });

    await newTask.save();
    res.status(200).json({
      success: true,
      newTask,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};
export const getUserTask = async (req, res) => {
  try {
    const { fromUser } = req.body;
    // check if post exists
    const Tasks = await taskModel.find({ fromUser });
    if (!Tasks || Tasks.length == 0) {
      return res.status(404).send("no Tasks found");
    }
    const mapedTask = Tasks.map((e) => {
       e.fromUser = " "
       return e;
    });
    res.status(200).send({
      status: "success",
      message: "post added successfully",
      Tasks: [...mapedTask ],
    });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
