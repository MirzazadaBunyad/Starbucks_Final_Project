import React from "react";
import { Link } from "react-router-dom";
import BasicAccordion from "../components/UI/Accordion";
import { BsFacebook, BsPinterest, BsSpotify, BsYoutube } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="pr-[40px] max-lg:hidden pl-[131px] pb-[24px] pt-[48px] flex flex-row footer border-t-[3px] border[#EBEBEB]">
        <div className="flex flex-col w-[190px]">
          <h2 className="mb-[24px] font-[Sodo] text-[19px]">About Us</h2>
          <Link className="font-[Sodo] py-[8px] my-[8px] text-[#00000094] hover:text-black">Our Company</Link>
          <Link className="font-[Sodo] py-[8px] my-[8px] text-[#00000094] hover:text-black">Our Coffee</Link>
          <Link className="font-[Sodo] py-[8px] my-[8px] text-[#00000094] hover:text-black">Stories and News</Link>
          <Link className="font-[Sodo] py-[8px] my-[8px] text-[#00000094] hover:text-black">Starbucks Archive</Link>
          <Link className="font-[Sodo] py-[8px] my-[8px] text-[#00000094] hover:text-black">Investor Relations</Link>
          <Link className="font-[Sodo] py-[8px] my-[8px] text-[#00000094] hover:text-black">Customer Service</Link>
        </div>
        <div className="flex flex-col ml-[32px] w-[190px]">
          <h2 className="mb-[24px] font-[Sodo] text-[19px]">Careers</h2>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black ">Culture and Values</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">Inclusion, Diversity, and Equity</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">College Achievement Plan</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">Alumni Community</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">U.S. Careers</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">International Careers</Link>
        </div>
        <div className="flex flex-col ml-[32px] w-[190px]">
          <h2 className="mb-[24px] font-[Sodo] text-[19px]">Social Impact</h2>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black ">People</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">Planet</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">
            Environmental and Social Impact Reporting
          </Link>
        </div>
        <div className="flex flex-col ml-[32px] w-[190px]">
          <h2 className="mb-[24px] font-[Sodo] text-[19px]">For Business Partners</h2>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black ">Landlord Support Center</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">Suppliers</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">Corporate Gift Card Sales</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">Office and Foodservice Coffee</Link>
        </div>
        <div className="flex flex-col ml-[32px] w-[190px]">
          <h2 className="mb-[24px] font-[Sodo] ext-[19px]">Order and Pick Up</h2>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black ">Order on the App</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">Order on the Web</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">Delivery</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">Order and Pick Up Options</Link>
          <Link className="py-[8px] font-[Sodo] my-[8px] text-[#00000094] hover:text-black">Explore and Find Coffee for Home</Link>
        </div>
      </footer>
      <BasicAccordion />

      <div className="lg:pr-[40px] max-lg:pl-[16px] lg:pl-[131px] pb-[145px] border-t-[3px] border[#EBEBEB]">
        <ul className="flex gap-[15px] py-[30px]">
          <li className="text-[30px]">
            <BsSpotify />
          </li>
          <li className="text-[30px]">
            <BsFacebook />
          </li>
          <li className="text-[30px]">
            <BsPinterest />
          </li>
          <li className="text-[30px] rounded-full">
            <FaInstagramSquare />
          </li>
          <li className="text-[30px]">
            <BsYoutube />
          </li>
          <li className="text-[30px]">
            <AiFillTwitterCircle />
          </li>
        </ul>
        <ul className="max-md:flex-col flex gap-[20px] pb-[18px] font-[Sodo]">
          <li>Privacy Notice</li>
          <li className="flex">
            <div className="max-md:hidden max-md:p-0 max-md:m-0">|</div>
            <Link className="max-md:pl-0 max-md:text-[14px] pl-[18px]">Terms of Use</Link>
          </li>
          <li className="flex">
            <div className="max-md:hidden max-md:p-0 max-md:m-0">|</div>
            <Link className="max-md:pl-0 max-md:text-[14px] pl-[18px]">Do Not Share My Personal Information</Link>
          </li>
          <li className="flex">
            <div className="max-md:hidden max-md:p-0 max-md:m-0">|</div>
            <Link className="max-md:pl-0 max-md:text-[14px] pl-[18px]">CA Supply Chain Act</Link>
          </li>
          <li className="flex">
            <div className="max-md:hidden max-md:p-0 max-md:m-0">|</div>
            <Link className="max-md:pl-0 max-md:text-[14px] pl-[18px]">Cookie Prefernces</Link>
          </li>
        </ul>
        <p className="pb-[40px] text-[#79796B]">© 2023 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
