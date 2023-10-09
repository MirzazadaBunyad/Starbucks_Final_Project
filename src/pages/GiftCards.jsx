import { nanoid } from "@reduxjs/toolkit";
import giftcard from "../assets/data/Giftcarddt.json";
import GiftCard from "../components/UI/GiftCard";
import { Link } from "react-router-dom";
function GiftCards() {
  return (
    <div>
      {giftcard.giftcard.map((item) => (
        <GiftCard key={nanoid()} {...item} />
      ))}
      <div className="gift-bulk flex items-center py-[56px] pr-[40px] pl-[131px]">
        <img
          src="https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg"
          alt=""
          className="w-[375px] mr-[40px]"
        />
        <div className="gift-bulk-first flex flex-col mr-[32px] pr-[56px] pl-[16px]">
          <h2 className="gift-bulk1 font-[Sodo] pr-[16px] pb-[8px] text-[24px]">
            Gift Cards in Bulk
          </h2>
          <p className="gift-bulk2 w-[300px] max-md:text-[14px] font-[Sodo] text-[#00000094]">
            There’s an easier way to buy Starbucks Cards in bulk! Give a
            Starbucks Card to gift, reward, incentivize, or show appreciation
            towards your customers, clients and team members.
          </p>
          <Link className=" transition-[0.3] font-[Sodo] hover:bg-[rgba(0,0,0,.1)] mt-[16px] w-[37%] rounded-[30px] border-black border-[2px] py-[7px] px-[16px] max-md:px-[20px] text-[16px] max-md:text-[14px]">
            Shop now
          </Link>
        </div>
      </div>
      <div className="bg-[#EDEBE9]">
        <div className="gift-card py-[40px] pr-[40px] pl-[131px]">
          <h2 className="pr-[32px] pb-[8px] text-[14px] font-[SodoSB] tracking-widest">
            GIFT CARD SUPPORT
          </h2>
          <p className="py-[8px] w-[40%] text-[#000000DE] font-[Sodo]">
            Use the links below to manage eGifts you have sent or received, or
            view our full Card Terms & Conditions.
          </p>
          <div className="flex">
            <Link className="mr-[16px] inline-block hover:bg-[rgba(0,0,0,.1)] mt-[16px]  rounded-[30px] border-black border-[1px] py-[7px] px-[16px] text-[16px] font-bold">
              eGift Support
            </Link>
            <Link className="mr-[16px] inline-block hover:bg-[rgba(0,0,0,.1)] mt-[16px] rounded-[30px] border-black border-[1px] py-[7px] px-[16px] text-[16px] font-bold">
              See Terms & Conditions
            </Link>
            <Link className="mr-[16px] inline-block hover:bg-[rgba(0,0,0,.1)] mt-[16px] rounded-[30px] border-black border-[1px] py-[7px] px-[16px] text-[16px] font-bold">
              eGift FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GiftCards;
