/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { taskActions } from "../store/store";

const TaskList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      axios
        .post("http://localhost:8080/api/v1/tasks/user/getTask", {
          fromUser: user.name,
        })
        .then(function (response) {
          console.log(response.data.Tasks);
          dispatch(taskActions.add(response.data.Tasks));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);
  const tasks = useSelector((state) => state.task);

  return (
    <div className="task-list-container">
      <h2 className="task-list-title">Task List</h2>
      {tasks.length !== 0 &&
        tasks.map((task, index) => (
          <div key={index} className="task-item">
            <h3 className="task-title">{task.title}</h3>
            <p className="task-assignee">
              <strong>Assignee:</strong> {task.assignee}
            </p>
            <p className="task-due-date">
              <strong>Due Date:</strong> {task.dueDate}
            </p>
            <Link
              to="/task-details"
              className="task-details-link"
              state={{
                data: {
                  title: task.title,
                  description: task.description,
                  assignee: task.assignee,
                  dueDate: task.dueDate,
                  priority: task.priority,
                },
              }}
            >
              View Details
            </Link>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default TaskList;
