import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { generatePath } from "../../utils/generatePath";
import Cart from "./Cart";

function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const getOneItemFromEachCategory = () => {
    const categoriesMap = new Map();
    const oneItemFromEachCategory = [];

    data.forEach((item) => {
      if (!categoriesMap.has(item.subcategory)) {
        categoriesMap.set(item.subcategory, item);
        oneItemFromEachCategory.push(item);
      }
    });

    return oneItemFromEachCategory;
  };

  const oneItemFromEachCategory = getOneItemFromEachCategory();

  return (
    <>
      <hr />
      <div className="lg:py-[40px] max-lg:pt-[32px] max-lg:px-[16px] lg:pr-[175px] lg:pl-[119px]">
        <h1 className="text-[#000000DE] text-[28px] max-lg:text-[24px] font-[SodoB] lg:pb-[48px] max-lg:pb-[24px]">
          Menu
        </h1>
        <h3 className="pb-[16px] text-[24px] max-md:text-[19px] text-[#000000DE] font-[SodoB]">
          Drinks
        </h3>
        <hr className="pb-[32px]" />
        <div className="right-menu gap-y-7">
          {oneItemFromEachCategory.map((item) => (
            <div key={nanoid()} className="flex items-center">
              <Link
                to={`/${generatePath(item.subcategory)}`}
                className="right-menu-1 flex items-center  "
              >
                <img
                  className="menu-img w-[110px] rounded-[50%]"
                  src={item.img}
                  alt=""
                />
                <p className="menu-subcat font-[Sodo] pl-[20px] text-[18px] w-[100%]">
                  {item.subcategory}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Cart />
    </>
  );
}

export default Menu;
