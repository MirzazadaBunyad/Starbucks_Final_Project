import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { generatePath } from "../utils/generatePath";
import { nanoid } from "@reduxjs/toolkit";
import Cart from "../components/UI/Cart";

function Category() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/menu/${category}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [category]);

  const groupItemsBySubcategoryAndType = (items) => {
    const groupedData = {};
    items.forEach((item) => {
      if (!groupedData[item.subcategory]) {
        groupedData[item.subcategory] = { [item.type]: [item] };
      } else {
        if (!groupedData[item.subcategory][item.type]) {
          groupedData[item.subcategory][item.type] = [item];
        } else {
          groupedData[item.subcategory][item.type].push(item);
        }
      }
    });
    return groupedData;
  };

  const groupedData = groupItemsBySubcategoryAndType(data);

  return (
    <>
      <div className="pt-[40px] pr-[205px] pl-[120px] max-md:px-[16px] max-md:pt-[32px]">
        <div className="">
          {Object.keys(groupedData).map((subcategory) => (
            <div key={nanoid()}>
              <h1 className="pb-[48px] text-[24px] font-[SodoB]">{subcategory}</h1>
              <div className="">
                {Object.keys(groupedData[subcategory]).map((type) => (
                  <div key={nanoid()} className="pb-[40px]">
                    <h2 className="font-[SodoB] text-[24px] pb-[16px]">
                      {type !== "undefined" ? type : ""}
                    </h2>
                    <hr className="pb-[32px]" />
                    <div className="flex flex-wrap gap-9">
                      {groupedData[subcategory][type].map((item) => (
                        <Link
                          key={nanoid()}
                          to={`/menu/${generatePath(
                            item.subcategory
                          )}/${generatePath(item.name)}`}
                        >
                          <div className="flex flex-col items-center text-center w-[200px] max-md:w-[342px]">
                            <img
                              className="rounded-[50%] w-[140px] mb-[20px]"
                              src={item.img}
                              alt=""
                            />
                            <h3 className="text-[16px] font-[Sodo]">{item.name}</h3>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cart />
    </>
  );
}

export default Category;
