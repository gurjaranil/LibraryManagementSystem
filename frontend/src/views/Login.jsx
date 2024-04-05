import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthProvider";
import "./login.css";
import React, { useState } from "react";
import AuthProvider, { useAuth } from "../hooks/AuthProvider";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useAuth();
  const navigate = useNavigate()


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await authContext.Login(email, password)
      navigate("/dashboard")
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="loginreal">
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <div className="real">
        <div className="text_areareal">
          {/* <label htmlFor="user-email">Email:</label> */}
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text_input1"
          />
        </div>
        <div className="text_areareal">
          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            placeholder="password"
            value={password}
            defaultValue="password"
            onChange={(e) => setPassword(e.target.value)}
            className="text_input1"
          />
        </div>
        </div>
        
        <input
          type="submit"
          value="LOGIN"
          className="btn"

        />
      </form>

    </div>
  )

}
export default Login;
