import { nanoid } from "@reduxjs/toolkit";
import { MdKeyboardArrowLeft } from "react-icons/md";
import CardsFooter from "./CardsFooter";
import Basket from "../../assets/img/basket.svg";
import Logo from "../../assets/img/logo.svg";
import {
  AiOutlineDown,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { counter } from "../../store/slices/BasketSlice";

function CardPage() {
  const { basket } = useSelector((store) => store.basket);
  const count = basket.reduce((kod, item) => (kod += item.count), 0);

  const dispatch = useDispatch()
  const countValueChange = (itemId, getVal) => {dispatch(counter({itemId, getVal}))}

  const back = useNavigate();
  const handleBack = () => {
    back(-1);
  };
  return (
    <>
      <div className="h-[100%]">
        <div className="flex max-lg:flex-col h-[100%] z-[2]">
          <div className="lg:w-[40%] lg:h-full lg:fixed  left-0 bg-[#1E3932]">
            <div className="flex flex-col max-lg:ml-[24px] max-lg:px-[24px] lg:px-[40px] max-lg:mt-[35px] max-lg:mb-[24px] lg:pb-[24px] max-lg:py-[24px] lg:my-[310px]">
              <h1 className="text-[24px] max-md:text-[19px] text-white font-[SodoB]">
                Review Order ({count})
              </h1>
              <div className="flex justify-between mt-[15px] items-center">
                <div className="text-white flex flex-col lg:gap-[7px]">
                  <span className="text-[14px] text-[#ADB6B4] font-[Sodo]">
                    Pickup store
                  </span>
                  <p className="font-[SodoSB] max-md:text-[14px]">Ganjlik Mall : 5.3 km</p>
                </div>
                <div>
                  <AiOutlineDown fill="white" className="w-[18px]" />
                </div>
              </div>
              <hr className="lg:w-full mt-[3px] bg-[#627470]" />
            </div>
          </div>
          <div className="lg:top-[1.8rem] lg:z-10 lg:fixed">
            <div className="flex items-center px-[35px]">
              <Link
                onClick={handleBack}
                className="cursor-pointer flex leading-none items-center text-white text-[16px] font-[SodoB]"
              >
              <img src={Logo} className="mr-[48px] max-lg:hidden" alt="" />
              <div className="w-full max-lg:my-[16px] absolute lg:mt-[2px] lg:mr-[4px] max-lg:top-[5px] lg:left-[105px] max-lg:left-1">
                <MdKeyboardArrowLeft className="text-white text-[24px]" />
              </div>
                Back to menu
              </Link>
            </div>
          </div>
          <div className="bg-[#F9F9F9] lg:w-[60%] lg:absolute lg:right-0">
            {count === 0 ? (
              <div className="">
                <div className="lg:px-[220px] max-lg:max-w-[70%] max-[480px]:max-w-[90%] max-[480px]:mx-auto max-lg:mx-auto lg:py-[40px] pb-[40px] flex flex-col items-start">
                  <div className="max-md:max-w-full max-md:my-[40px] max-md:mx-auto">
                    <img
                      className="w-[176px] h-[216px] lg:mt-[48px] rounded-lg flex"
                      key={nanoid()}
                      src={Basket}
                      alt=""
                    />
                  </div>
                  <div className="mt-[16px] my-[32px]">
                    <h2 className="text-[36px] font-[Sodo] max-md:text-[28px]">
                      Start your next order
                    </h2>
                    <p className="mt-[16px]  text-[19px] max-md:text-[16px] font-[Sodo] text-[#00000094]">
                      As you add menu items, they'll appear here. You'll have a
                      chance to review before placing your order.
                    </p>
                    <Link
                      to="/menu"
                      className="py-[7px] mt-[24px] px-[16px] border-[1px] leading-[1.2] font-[Sodo] inline-block max-md:text-[14px] rounded-[50px] border-[#00754A] text-[#00754A]"
                    >
                      Add items
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white w-[500px] mx-auto pt-[16px] ">
                <div className="p-[24px]">
                  {basket.map((item) => item.count > 0 && (
                    <div className="flex mb-[15px] ">
                      <div className="w-[105px]">
                        <img
                          className="w-[105px] h-[105px] rounded-[50%] justify-center"
                          key={nanoid()}
                          src={item.img}
                        />
                      </div>
                      <div>
                        <div className="pl-[24px]">
                          <h3 className="mb-[16px] text-[22px] w-[324px] font-[Sodo] leading-7">
                            {item.name}
                          </h3>
                          <p className="pb-[16px] font-[Sodo]">Grande</p>
                          <p className="font-[Sodo] text-[16px] pb-[8px]">
                            200★ item
                          </p>
                          <p className="font-[Sodo] text-[16px]">
                            Quantity:{" "}
                            <span className="text-[#006241]">{item.count}</span>
                          </p>
                        </div>
                        <div className="flex py-[8px] pl-[24px]">
                          <button
                            onClick={handleBack}
                            className="mr-3 text-[#00000094]"
                          >
                            <BsPencil className="w-[24px] h-[24px]" />
                          </button>
                          <button>
                            <AiOutlineMinusCircle onClick={ () => countValueChange(item.id, -1) } className="w-[24px] h-[24px] text-[#00000094]" />
                          </button>
                          <button>
                            <AiOutlinePlusCircle onClick={ () => countValueChange(item.id, 1) } className="w-[24px] h-[24px] ml-3 text-[#00000094]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-[48px]">
              <CardsFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardPage;
