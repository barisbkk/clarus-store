import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrivateRouter = () => {
  return true ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
