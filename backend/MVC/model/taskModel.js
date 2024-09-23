/** @format */

import mongoose from "mongoose";
const taskSchema = mongoose.Schema(
  {
    fromUser: {
      type: String,
      require: [true, "user name is require"],
    },
    title: {
      type: String,
      require: [true, "title is require"],
    },
    description: {
      type: String,
      require: [true, "description is require"],
    },
    assignee: {
      type: String,
      require: [true, "assignee are require"],
    },
    dueDate: {
      type: Date,
      require: [true, "date is required"],
    },
    priority: {
      type: String,
      require: [true, "priority is required"],
    },
  },
  { timeStamp: true }
);
export const taskModel = mongoose.model("task", taskSchema);
