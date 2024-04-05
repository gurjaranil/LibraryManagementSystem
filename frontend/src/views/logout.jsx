import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

const Logout = () => {
  const authContext = useAuth();
  const navigate = useNavigate()


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await authContext.Logout()
      navigate("/dashboard")
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };
  return <button onClick={handleSubmit}>Logout</button>;
};

export default Logout;