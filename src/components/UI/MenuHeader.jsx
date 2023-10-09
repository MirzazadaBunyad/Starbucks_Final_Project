import { Link } from "react-router-dom";

function MenuHeader() {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="flex mr-[40px] ml-[130px]">
        <Link to="/menu" className="font-[Sodo] text-[13px] py-[16px] mr-[32px]">All products</Link>
        <Link to="/menu/featured" className="font-[Sodo] text-[13px] py-[16px] mr-[32px]">Featured</Link>
        <Link to="/menu/previous" className="font-[Sodo] text-[13px] py-[16px] mr-[32px]">Previous Orders</Link>
        <Link to="/menu/favorites" className="font-[Sodo] text-[13px] py-[16px] mr-[32px]">Favorite Products</Link>
      </div>
    </div>
  );
}
export default MenuHeader;
