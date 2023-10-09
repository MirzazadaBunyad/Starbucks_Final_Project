import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { MdLocationPin } from "react-icons/md";
import Logo from "../../assets/img/logo.svg";

function Navbar() {
  const [active, setActive] = useState(false);

  const hamburgerMenu = () => {
    setActive(!active);
    document.body.style.overflow = active ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setActive(false);
    document.body.style.overflow = "auto";
  };

  const position = active ? "right-0" : "-right-[1990px]";

  return (
    <nav className="h-[99px] max-md:pl-[16px] max-md:pr-[16px] relative flex items-center px-[40px] justify-between border-b-[3px] border[#EBEBEB] ">
      <div className="max-md:w-[40px] flex items-center">
        <div className="lg:w-[90px] md:w-[75px] cursor-pointer">
          <Link to="/">
            <img src={Logo} alt="logo_img" />
          </Link>
        </div>

        <div className="navbar max-md:hidden font-[Sodo] font-[700]">
          <NavLink
            className="tracking-widest nav-font text-sm hover:text-[#01754A]"
            to="/menu"
          >
            MENU
          </NavLink>
          <NavLink
            className="nav-font ml-[24px] tracking-widest text-sm hover:text-[#01754A]"
            to="/rewards"
          >
            REWARDS
          </NavLink>
          <NavLink
            className="nav-font ml-[24px] tracking-widest text-sm hover:text-[#01754A]"
            to="/giftcards"
          >
            GIFT CARDS
          </NavLink>
        </div>
      </div>
      <div className="flex max-md:hidden">
        <div className="flex mr-[40px] text-sm hover:text-[#01754a] cursor-pointer">
          <div className="pr-[8px]">
            <MdLocationPin className="text-[24px]" />
          </div>
          <Link
            to="/findstore"
            className="font-[Sodo] mb-[0] pb-[0] text-[14px]"
          >
            Find a store
          </Link>
        </div>
        <div>
          <Link
            to="signin"
            className="font-[Sodo] border hover:bg-[#e5e5e5] border-black rounded-[20px] py-[5px] px-[16px] duration-[0.3s] mr-[16px] text-[14px]"
          >
            Sign in
          </Link>
          <Link
            to="joinnow"
            className="font-[Sodo] border border-black bg-black hover:bg-[#4c4c4c] text-white rounded-[20px] py-[5px] px-[16px] duration-[0.3s] text-[14px]"
          >
            Join now
          </Link>
        </div>
      </div>

      <div
        onClick={hamburgerMenu}
        className="bg-white hidden flex-col gap-[5px] max-md:flex"
      >
        <div className="bg-[#808080] w-[20px] h-[2px]"></div>
        <div className="bg-[#808080] w-[20px] h-[2px]"></div>
        <div className="bg-[#808080] w-[20px] h-[2px]"></div>
      </div>
      <div
        className={`md:hidden bg-white z-[999] h-[100vh] ${position} transition-all absolute border top-[97px] w-[80%]`}
      >
        <div className="flex flex-col pt-[32px]">
          <Link
            to="menu"
            onClick={closeMenu}
            className="text-[19px] text-[#000000DE] py-[16px] px-[32px] flex justify-between items-center"
          >
            Menu
          </Link>
          <Link
            to="rewards"
            onClick={closeMenu}
            className="text-[19px] text-[#000000DE] py-[16px] px-[32px]"
          >
            Rewards
          </Link>
          <Link
            to="giftcards"
            onClick={closeMenu}
            className="text-[19px] text-[#000000DE] pt-[16px] pb-[32px] px-[32px]"
          >
            Gift Cards
          </Link>
          <hr className="pb-[32px]" />
          <div className="px-[24px]">
            <div className="flex">
              <Link
                to="signin"
                onClick={closeMenu}
                className="py-[7px] px-[16px] text-[#000000DE] rounded-[20px] border-[1px] border-black mr-[16px]"
              >
                Sign in
              </Link>
              <Link
                to="joinnow"
                onClick={closeMenu}
                className="py-[7px] px-[16px] text-[#000000DE] rounded-[20px] border-[1px] border-black bg-black text-white"
              >
                Join now
              </Link>
            </div>
            <div className="mt-[16px] pr-[8px]">
              <Link to="findstore" onClick={closeMenu} className="flex">
                <TiLocation size={24} className="mr-[8px]" />
                Find a store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
