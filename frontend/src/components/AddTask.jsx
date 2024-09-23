/** @format */
import React, { useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../store/store";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user=useSelector(state=>state.user)

  const titleRef = useRef();
  const descriptionRef = useRef();
  const assigneeRef = useRef();
  const dueDateRef = useRef();
  const priorityRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      fromUser:user.name,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      assignee: assigneeRef.current.value,
      dueDate: dueDateRef.current.value,
      priority: priorityRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/tasks/user/createTask",
        taskData
      );

      if (response.status === 201) {
        
      } else {
        titleRef.current.value = "";
        descriptionRef.current.value = "";
        assigneeRef.current.value = "";
        dueDateRef.current.value = "";
        priorityRef.current.value = "Low";
        navigate("/");
        console.log(response)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-task-container">
      <div className="add-task-card">
        <h1 className="add-task-title">Add New Task</h1>
        <form onSubmit={handleSubmit} className="add-task-form">
          <div className="form-group">
            <label htmlFor="title">Task Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              ref={titleRef}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              ref={descriptionRef}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="assignee">Assignee:</label>
            <input
              type="text"
              id="assignee"
              name="assignee"
              ref={assigneeRef}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              ref={dueDateRef}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority:</label>
            <select id="priority" name="priority" ref={priorityRef} required>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button type="submit" className="add-task-button">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
