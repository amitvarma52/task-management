/** @format */

import axios from "axios";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userActions } from "../store/store";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const Login = (email, password) => {
    axios
      .post(
        "http://localhost:8080/api/v1/tasks/user/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      )
      .then((response) => {
        navigate("/");
        const userData = response.data.user._doc;
        dispatch(userActions.initial(userData));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    Login(email.current.value, password.current.value);
  };
  return (
    <>
      <div className="form" onSubmit={handleLogin}>
        <div className="main_div">
          <div className="title">Login</div>
          <form action="#">
            <div className="input_box">
              <input type="text" placeholder="Email" ref={email} required />
              <div className="icon">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="input_box">
              <input
                type="password"
                placeholder="Password"
                ref={password}
                required
              />
              <div className="icon">
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="input_box button">
              <input type="submit" value="Login" />
            </div>
            <div className="sign_up">
              Not a member? <Link to="/register">register</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
