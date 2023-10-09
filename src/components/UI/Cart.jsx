import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";

function Cart() {
  const { basket } = useSelector((store) => store.basket);
  const count = basket.reduce((kod, item) => (kod += item.count), 0);
  return (
    <div className="max-[1199px]:pr-[115px] max-[1200px]:pl-[400px] max-lg:pr-[15px] max-lg:h-[75px] max-lg:py-[16px] max-lg:px-[99px] max-md:px-[16px] flex pr-[270px] pl-[400px] left-0 items-center z-10 justify-between fixed bottom-0 w-[100%] h-[95px] bg-[#1E3932]">
      <div className="">
        <div className="flex items-center">
          <div className="w-[240px]">
            <Link
              to="/findstore"
              className="flex justify-between items-center mb-[10px]"
            >
              <div className="flex flex-col">
                <span className="text-[#ffffffb2] max-md:text-[13px] font-[Sodo]">
                  For item availability
                </span>
                <span className="text-white max-md:text-[14px] font-[SodoB]">Choose a store</span>
              </div>
              <MdKeyboardArrowDown className="mt-[1.2rem] w-[18px] h-[18px] text-white" />
            </Link>
            <hr className="w-[100%] max-md:w-full" />
          </div>
        </div>
      </div>
      <Link to="/menu/basket">
        <div className="h-[32px] w-[32px] text-white text-center font-[SodoB] text-[19px] pt-[5px] my-auto inline-block bg-[url('https://www.starbucks.com/app-assets/9c51700b42896823747e5d9f27519d03.svg')]">{count}</div>
      </Link>
    </div>
  );
}
export default Cart;
