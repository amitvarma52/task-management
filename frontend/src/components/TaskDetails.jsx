/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";

const TaskDetails = () => {
  const location = useLocation();
  const { data } = location.state || {}; 

  const { title, description, assignee, dueDate, priority } = data;

  return (
    <div className="task-details-container">
      <div className="task-details-card">
        <h2 className="task-title" style={{color:"green"}}>{title}</h2>
        <div className="task-info">
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Assignee:</strong> {assignee}
          </p>
          <p>
            <strong>Due Date:</strong> {dueDate}
          </p>
          <p>
            <strong>Priority:</strong> {priority}
          </p>
        </div>
        <div className="task-actions">
          <button className="update-task-btn">Update Task</button>
          <Link to="/task-list" className="back-to-list-btn">
            Back to Task List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
