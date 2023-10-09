import { Link } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import Cart from "./Cart";

function PreviousOrders() {
  return (
    <div>
      <MenuHeader />
      <div className="max-md:mx-[16px] mr-[40px] ml-[131px] mb-[50px]">
        <h1 className="my-[40px] text-[24px] text-[#000000de] font-[SodoB]">
          Previous Orders
        </h1>
        <div className="mt-[40px]">
          <img
            src="https://www.starbucks.com/weblx/images/moon-phases.gif"
            alt=""
          />
        </div>
        <p className="text-[28px] mt-[16px] font-[SodoSB] w-[315px]">
          When history repeats itself
        </p>
        <p className="text-[19px] text-[#00000094] my-[16px] font-[Sodo] w-[315px]">
          Previous orders will appear here to quickly order again.
        </p>
        <div className="pt-[8px]">
          <Link className="font-[Sodo] px-[16px] py-[7px] border-black border-[1px] inline-block rounded-[50px]">Sign in</Link>
          <Link className="font-[Sodo] px-[16px] py-[7px] border-[1px] inline-block rounded-[50px] text-white ml-[16px] bg-black">Join now</Link>
        </div>
      </div>
      <Cart />
    </div>
  );
}
export default PreviousOrders;
