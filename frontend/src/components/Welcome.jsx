/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const changeTasks = () => {
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
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }else{
      changeTasks()
    }
  }, []);
  return (
    <div className="task-container">
      <div className="task-card">
        <h1 className="task-title">Welcome to the Task Assignment System</h1>
        <div className="task-links">
          <Link to="/add-task" className="task-link">
            Add Task
          </Link>
          <Link to="/task-list" className="task-link">
            Task List
          </Link>
        </div>
        <p className="task-description">
          Manage and track tasks efficiently. Use the navigation links to add
          new tasks or view and manage existing one.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
