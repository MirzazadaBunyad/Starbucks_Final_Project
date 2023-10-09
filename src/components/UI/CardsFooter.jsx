import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

import { BsFacebook, BsPinterest, BsSpotify, BsYoutube } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

function CardsFooter() {
  return (
    <>
      <div className="footer-accordion">
        <Accordion className="py-[16px]">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>About Us</Typography>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col">
            <Link className="footer-list">Our Company</Link>
            <Link className="footer-list">Our Coffee</Link>
            <Link className="footer-list">Stories and News</Link>
            <Link className="footer-list">Starbucks Archive</Link>
            <Link className="footer-list">Investor Relations</Link>
            <Link className="footer-list">Customer Service</Link>
          </AccordionDetails>
        </Accordion>
        <Accordion className="py-[16px]">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Careers</Typography>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col">
            <Link className="footer-list ">Culture and Values</Link>
            <Link className="footer-list">
              Inclusion, Diversity, and Equity
            </Link>
            <Link className="footer-list">College Achievement Plan</Link>
            <Link className="footer-list">Alumni Community</Link>
            <Link className="footer-list">U.S. Careers</Link>
            <Link className="footer-list">International Careers</Link>
          </AccordionDetails>
        </Accordion>
        <Accordion className="py-[16px]">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Social Impact</Typography>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col">
            <Link className="footer-list ">People</Link>
            <Link className="footer-list">Planet</Link>
            <Link className="footer-list">
              Environmental and Social Impact Reporting
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion className="py-[16px]">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>For Business Partners</Typography>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col">
            <Link className="footer-list ">Landlord Support Center</Link>
            <Link className="footer-list">Suppliers</Link>
            <Link className="footer-list">Corporate Gift Card Sales</Link>
            <Link className="footer-list">Office and Foodservice Coffee</Link>
          </AccordionDetails>
        </Accordion>
        <Accordion className="py-[16px]">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Order and Pick Up</Typography>
          </AccordionSummary>
          <AccordionDetails className="flex flex-col">
            <Link className="footer-list ">Order on the App</Link>
            <Link className="footer-list">Order on the Web</Link>
            <Link className="footer-list">Delivery</Link>
            <Link className="footer-list">Order and Pick Up Options</Link>
            <Link className="footer-list">
              Explore and Find Coffee for Home
            </Link>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="bg-white max-md:pl-[20px] px-[40px] border-t-[3px] border[#EBEBEB]">
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
        <ul className="max-md:flex-col pb-[18px]">
          <li className="py-[8px] mb-[4px]">
            <Link>Privacy Notice</Link>
          </li>
          <li className="py-[8px] mb-[4px]">
            <Link className="max-md:pl-0 ">Terms of Use</Link>
          </li>
          <li className="py-[8px] mb-[4px]">
            <Link className="max-md:pl-0">
              Do Not Share My Personal Information
            </Link>
          </li>
          <li className="py-[8px] mb-[4px]">
            <Link className="max-md:pl-0">CA Supply Chain Act</Link>
          </li>
          <li className="py-[8px] mb-[4px]">
            <Link className="max-md:pl-0">Cookie Prefernces</Link>
          </li>
        </ul>
        <p className="pb-[40px] text-[#79796B]">
          © 2023 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </>
  );
}
export default CardsFooter;
