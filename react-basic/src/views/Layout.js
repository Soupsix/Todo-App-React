import React from "react";
import Navigation from "./Nav/Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
