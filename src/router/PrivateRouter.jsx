import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthProvider";

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);

  return user.email && user.pass ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
