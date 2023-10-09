import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generatePath } from "../utils/generatePath";

function AllMenu() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="max-lg:hidden flex pt-[16px] pb-[40px] flex-col">
      <div className="pl-[131px] gap-[20px] flex flex-col ">
        <h3 className="text-[19px] font-[SodoSB] mt-[24px]">Drinks</h3>  
        <ul className="flex w-[150px] flex-col gap-[20px]">
          {data.map((item) => (
            <li
              className="text-[16px] leading-[20px] font-[Sodo] text-[#6B6B6B]"
              key={nanoid()}
            >
              <Link to={`/${generatePath(item)}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllMenu;
