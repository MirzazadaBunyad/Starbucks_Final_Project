import React from "react";
import { Outlet } from "react-router-dom";
import MenuHeader from "../components/UI/MenuHeader";
import AllMenu from "../pages/AllMenu";

function MenuLayout() {
  return (
    <>
      <div className="menuheader">
        <MenuHeader />
      </div>
      <div className="flex">
        <AllMenu />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MenuLayout;
