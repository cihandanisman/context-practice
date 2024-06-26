import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from '../pages/About'

const PrivateRouter = () => {
  const { signed } = useContext(AuthContext);
  console.log(signed);

  return !signed ? (
    <Login />
  ) : (
    <>
      <Outlet />
      
    </>


  );
};

export default PrivateRouter;
