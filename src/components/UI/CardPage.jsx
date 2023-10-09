import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { giftcard } from "../../assets/data/Giftcarddt.json";
import { nanoid } from "@reduxjs/toolkit";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Header from "../../pages/Header";
import CardsFooter from "./CardsFooter";

function CardPage() {
  const { gift } = useParams();
  const back = useNavigate();
  const [category, index] = gift.split("-");

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleClick = () => {
    back(-1);
  };

  return (
    <>
      <Header className="lg:fixed w-[100%] bg-white lg:z-[999999]" />
      <div className="h-[100%]">
        <div className="lg:flex max-lg:flex-col lg:h-[100%] lg:z-[2]">
          <div className="lg:w-[40%] lg:fixed left-0">
            <div className="flex flex-col lg:px-[131px] max-md:border-b-[4px] max-[1280px]:px-[40px] max-lg:px-[24px] pb-[24px] lg:my-[300px]">
              <span
                onClick={handleClick}
                className=" cursor-pointer flex items-center lg:ml-[-22px] lg:mb-[28px] max-lg:mb-[1rem] text-[#00000094] text-[19px] max-md:text-[16px] font-[SodoB]"
              >
                <MdKeyboardArrowLeft className="mt-[2px] mr-[4px]" />
                Gift cards
              </span>
              <h1 className="text-[28px] max-md:text-[24px] font-[SodoB]">
                Create gift card
              </h1>
            </div>
          </div>
          <div className="bg-[#F9F9F9] lg:w-[60%] lg:absolute right-0">
            <hr />
            <div className="">
              <div className="lg:pt-[200px] max-lg:pt-[24px] px-[40px] pb-[40px] flex items-center justify-center">
                <img
                  className="w-[343px] h-[216px] rounded-lg"
                  key={nanoid()}
                  src={
                    giftcard.find(
                      (item) => item.category.toLowerCase() === category
                    ).cards[index]
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="pb-[64px]">
              <form className="flex flex-col items-center ">
                <div className="tracking-widest lg:ml-[-215px] my-[8px] text-[#00000094] font-[SodoB]">
                  GIFT AMOUNT
                </div>
                <div className="mb-[50px] mt-2">
                  <select
                    className="border-[2px] font-[Sodo] mx-auto rounded-xl border-[#CACACA] w-[343px] h-[48px] px-3"
                    value={selectedOption}
                    onChange={handleOptionChange}
                  >
                    <option value="option1">$10</option>
                    <option value="">$25</option>
                    <option value="option2">$50</option>
                    <option value="option3">$100</option>
                    <option value="option3">Custom Amount</option>
                  </select>
                </div>
                <div className="pt-[8px]">
                  <div className=" text-[#00000094] font-[SodoB] ml-[8px] tracking-widest">
                    TO
                  </div>
                  <div
                    className="relative py-[12px] px-[8px]"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="text"
                      className="border-[2px] rounded-xl border-[#CACACA] w-[343px] h-[48px] px-3 peer block min-h-[auto] py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput2"
                      placeholder="Form control lg"
                    />
                    <label
                      for="exampleFormControlInput2"
                      className="top-3 left-5 pointer-events-none absolute max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >
                      * Recipient Name
                    </label>
                  </div>
                  <div
                    className="relative py-[12px] px-[8px]"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="text"
                      className="
                    border-[2px] rounded-xl border-[#CACACA] w-[343px] h-[48px] px-3
                    
                    peer block min-h-[auto] py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput2"
                      placeholder="Form control lg"
                    />
                    <label
                      for="exampleFormControlInput2"
                      className="top-3 left-5 pointer-events-none absolute max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >
                      * Recipient Email
                    </label>
                  </div>
                </div>
                <div className="pt-[8px]">
                  <div className=" text-[#00000094] font-[SodoB] ml-[8px] tracking-widest">
                    FROM
                  </div>
                  <div
                    className="relative py-[12px] px-[8px]"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="text"
                      className="
                    border-[2px] rounded-xl border-[#CACACA] w-[343px] h-[48px] px-3
                    
                    peer block min-h-[auto] py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput2"
                      placeholder="Form control lg"
                    />
                    <label
                      for="exampleFormControlInput2"
                      className="top-3 left-5 pointer-events-none absolute max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >
                      * Sender Name
                    </label>
                  </div>
                  <div
                    className="relative py-[12px] px-[8px]"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="text"
                      className="
                    border-[2px] rounded-xl border-[#CACACA] w-[343px] h-[48px] px-3
                    
                    peer block min-h-[auto] py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput2"
                      placeholder="Form control lg"
                    />
                    <label
                      for="exampleFormControlInput2"
                      className="top-3 left-5 pointer-events-none absolute max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >
                      * Sender Email
                    </label>
                  </div>
                  <div className=" text-[#00000094] font-[SodoB] ml-[8px] tracking-widest">
                    MESSAGE
                  </div>
                  <div
                    className="relative py-[12px] px-[8px]"
                    data-te-input-wrapper-init
                  >
                    <input
                      type="text"
                      className="
                    border-[2px] rounded-xl border-[#CACACA] w-[343px] h-[48px] px-3
                    
                    peer block min-h-[auto] py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput2"
                      placeholder="Form control lg"
                    />
                    <label
                      for="exampleFormControlInput2"
                      className="top-3 left-5 pointer-events-none absolute max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >
                      * Message (optional)
                    </label>
                  </div>
                </div>
              </form>
              <div className="z-10 right-[3%] bottom-[5%] fixed">
                <button
                  className="font-[SodoSB] text-[19px] bg-[#01754A] opacity-[0.5] text-white py-[18px] px-[24px] rounded-[50px] "
                >
                  Checkout
                </button>
              </div>
            </div>
            <CardsFooter />
          </div>
        </div>
      </div>
    </>
  );
}
export default CardPage;
