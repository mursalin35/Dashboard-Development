import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default AuthLayout;
