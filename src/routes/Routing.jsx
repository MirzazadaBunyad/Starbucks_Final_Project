import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Rewards from "../pages/Rewards";
import GiftCards from "../pages/GiftCards";
import SeeAll from "../components/UI/SeeAll";
import CardPage from "../components/UI/CardPage";
import MenuLayout from "../layouts/MenuLayout";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Starbucks404 from "../pages/Starbucks404";
import Menu from "../components/UI/Menu";
import Featured from "../components/UI/Featured";
import PreviousOrders from "../components/UI/PreviousOrders";
import FavoriteProducts from "../components/UI/FavoriteProducts";
import FindStore from "../pages/FindStore";
import Basket from "../components/UI/Basket";
import SignIn from "../components/UI/SignIn";
import JoinNow from "../components/UI/JoinNow";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayouts />}>
        <Route path="/" element={<MenuLayout />}>
          <Route path="/menu" element={<Menu />} />
          <Route path="/:category" element={<Category />} />
        </Route>
        <Route path="/menu/featured" element={<Featured />} />
        <Route path="/menu/previous" element={<PreviousOrders />} />
        <Route path="/menu/favorites" element={<FavoriteProducts />} />
        <Route path="/menu/:category/:name" element={<Product />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="giftcards" element={<GiftCards />} />
        <Route path="/giftcards/:category/:categoryName" element={<SeeAll />} />
        <Route path="/findstore" element={<FindStore />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/joinnow" element={<JoinNow />} />
      <Route path="/menu/basket" element={<Basket />} />
      <Route path="/giftcards/:gift" element={<CardPage />} />
      <Route path="/:starbucks404" element={<Starbucks404 />} />
    </>
  )
);
