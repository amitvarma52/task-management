/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Welcome from "./components/welcome.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import TaskDetails from "./components/TaskDetails.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/add-task", element: <AddTask /> },
      { path: "/task-list", element: <TaskList /> },
      { path: "/task-details", element: <TaskDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
