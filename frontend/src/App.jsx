/** @format */

import "./App.css";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}

export default App;
