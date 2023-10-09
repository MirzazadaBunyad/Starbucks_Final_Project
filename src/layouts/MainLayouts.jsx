import React from "react";
import Header from "../pages/Header";
import Main from "../pages/Main";
import Footer from "../pages/Footer";
import { Outlet, useLocation } from "react-router-dom";

function MainLayouts() {
  const location = useLocation();
  return (
    <>
    <Header />
      {location.pathname == "/" ? <Main /> : <Outlet />}
        <Footer />
    </>
  );
}

export default MainLayouts;
