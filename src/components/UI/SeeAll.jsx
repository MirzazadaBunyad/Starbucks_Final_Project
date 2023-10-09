import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import giftcard from "../../assets/data/Giftcarddt.json";

function GiftSeeAll() {
  const sectionTitle = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(giftcard.giftcard);
  }, []);

  const filteredData = data.find(
    (item) =>
      item.category.toLowerCase() === sectionTitle.categoryName.toLowerCase()
  );

  return (
    <div className="md:py-[64px] max-md:py-[40px] max-md:px-[16px] md:pr-[40px] md:pl-[131px]">
      <div className="font-[Sodo] max-md:text-[16px] md:text-[19px]">Gift cards</div>
      <div className="tracking-widest text-[#00000094] font-[SodoB] mb-[24px] pt-[24px] uppercase text-[14px] max-md:text-[13px]">
        {filteredData?.category}
      </div>
      <div className="grid gap-4 max-[600px]:grid-cols-1 max-md:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        {filteredData ? (
          filteredData.cards.map((item, i) => (
              <img
                key={nanoid()}
                className="rounded-[10px] transition hover:-translate-y-2 w-[320px] h-[205px]"
                src={item}
                alt=""
              />
          ))
        ) : (
          <p>No photos found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default GiftSeeAll;
