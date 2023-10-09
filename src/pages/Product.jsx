import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import { PiShootingStarLight } from "react-icons/pi";
import Cart from "../components/UI/Cart";
import { useDispatch, useSelector } from "react-redux";
import { counter, init } from "../store/slices/BasketSlice";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";

function Product() {
  const { basket } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  const { category, name } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/menu/${category}/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [category, name]);

  const addOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem("Orders")) || [];
    
    const existingOrderIndex = existingOrders.findIndex((item) => item.id === data.id);
    
    if (existingOrderIndex !== -1) {
      existingOrders[existingOrderIndex].count += 1;
    } else {
      existingOrders.push({ ...data, count: 1 });
    }
  
    localStorage.setItem("Orders", JSON.stringify(existingOrders));
    
    if (existingOrderIndex !== -1) {
      const itemId = data.id, getVal = 1
      dispatch(counter({itemId, getVal }));
    } else {
      dispatch(init(existingOrders[existingOrders.length - 1]));
    }
  };
  

  const link = useRef();
  const [selectedOption, setSelectedOption] = useState("");
  const [calori, setCalori] = useState("380 calories");
  const [selectedSize, setSelectedSize] = useState(null);
  useEffect(() => {
    link.current.click();
  }, []);

  const handleSizeClick = (size) => {
    const selectedSizeData = data.sizes?.find((item) => item.size === size);
    if (selectedSizeData) {
      setCalori(selectedSizeData.calories);
    }
    setSelectedSize(size);
  };

  return (
    <>
      <div className="">
        <div className="product bg-[#1F3933] flex pl-[130px] pr-[40px] max-lg:p-0">
          <div className="flex justify-center max-lg:max-w-[420px] max-lg:mx-auto max-lg:flex-col items-center">
            <div>
              <img
                className="w-[300px] product-img rounded-[50%] py-[16px] mr-[85px]"
                src={data.img}
                alt=""
              />
            </div>
            <div className="product-1 w-[50%] flex flex-col justify-center">
              <h3 className="text-white text-[36px] pb-[16px] w-[400px] font-[SodoB]">
                {data.name}
              </h3>
              <div className="font-[Sodo] flex gap-4 text-[#FFFFFFB2] text-[24px]">
                {calori !== null && <h3 className="h3">{calori}</h3>}
              </div>
            </div>
          </div>
        </div>
        <div className="product-2 flex">
          <div className="pt-[32px] pr-[40px] pl-[130px] max-lg:max-w-[420px] max-lg:mx-auto max-lg:p-0">
            <div className="w-[50%] mr-[85px] flex flex-col">
              <h1 className="pr-[8px] pb-[12px] text-[24px] font-[SodoSB]">
                Size options
              </h1>
              <hr className="bg-[#D4E9E2] w-[400px] h-[5px] mb-5" />
              <div className="mb-[3.2rem] flex justify-center items-center w-[100%]">
                <div className="flex mb-[8px] w-[45%]">
                  <Link
                    onClick={() => handleSizeClick("Tall")}
                    className="flex flex-col items-center mr-[18px]"
                  >
                    {selectedSize === "Tall" ? (
                      <img
                        className="my-[8px] mx-[24px]"
                        src="https://www.starbucks.com/app-assets/c6d5ff0dfccfc8966d3ad8ab2331921f.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        className="my-[8px] mx-[24px]"
                        src="https://www.starbucks.com/app-assets/76b8892b0db8f5d411988fe1bbbe4141.svg"
                        alt=""
                      />
                    )}

                    <p className="font-bold text-[16px]">Tall</p>
                    <p className="text-[14px]">12 fl oz</p>
                  </Link>
                  <Link
                    ref={link}
                    onClick={() => handleSizeClick("Grande")}
                    className="flex flex-col items-center mr-[18px]"
                  >
                    {selectedSize === "Grande" ? (
                      <img
                        className="my-[8px] mx-[24px]"
                        src="https://www.starbucks.com/app-assets/2362af789511c4dbe2446445dcc324f8.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        className="my-[8px] mx-[24px]"
                        src="https://www.starbucks.com/app-assets/2920fb2a8c34d3ddb95ad262872526e9.svg"
                        alt=""
                      />
                    )}
                    <p className="font-bold text-[16px]">Grande</p>
                    <p className="text-[14px]">16 fl oz</p>
                  </Link>
                  <Link
                    onClick={() => handleSizeClick("Venti")}
                    className="flex flex-col items-center mr-[18px]"
                  >
                    {selectedSize === "Venti" ? (
                      <img
                        className="my-[8px] mx-[24px]"
                        src="https://www.starbucks.com/app-assets/04342268ae304f7757dddb04a8e43b74.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        className="my-[8px] mx-[24px]"
                        src="https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec35e680d46d9a9.svg"
                        alt=""
                      />
                    )}
                    <p className="font-bold text-[16px]">Venti</p>
                    <p className="text-[14px]">24 fl oz</p>
                  </Link>
                  <Link
                    onClick={() => handleSizeClick("Trenta")}
                    className="flex flex-col items-center mr-[18px]"
                  >
                    {selectedSize === "Trenta" ? (
                      <img
                        className="my-[8px] mx-[24px]"
                        src="https://www.starbucks.com/app-assets/35ede7fba1a65e6f50ee927c5ecd6024.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        className="my-[8px] mx-[24px]"
                        src="https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg"
                        alt=""
                      />
                    )}
                    <p className="font-bold text-[16px]">Treanta</p>
                    <p className="text-[14px]">30 fl oz</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" pr-[40px] pb-[32px]">
              <div className="flex justify-start  items-center">
                <TfiLocationPin className="text-[#00000094] mr-[8px]" />
                <p className="text-[#00000094]">
                  Select a store to view availability
                </p>
              </div>
            </div>
          </div>
          <div className=" max-lg:max-w-[420px] max-lg:mx-auto max-lg:p-0 pt-[32px] pr-[40px] pl-[88px]">
            <div className="w-[50%] mr-[85px] flex flex-col">
              <h1 className="pr-[8px] pb-[12px] text-[24px] font-[SodoSB]">
                What's included
              </h1>
              <hr className="bg-[#D4E9E2] h-[5px] mb-5" />
              <div className="w-[400px]">
                <div className="relative py-[12px]" data-te-input-wrapper-init>
                  <TextField
                    id="outlined-read-only-input"
                    label="Flavors"
                    defaultValue="Vanilla Syrup pumps"
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                    color="success"
                  />
                </div>
                <div className="mb-[50px] mt-2">
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                      color="success"
                    >
                      Add-ins
                    </InputLabel>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value={10}>Ice</option>
                      <option value={20}>Extra Ice</option>
                      <option value={30}>Light Ice</option>
                      <option value={40}>No Ice</option>
                      <option value={50}>Ice</option>
                    </NativeSelect>
                  </FormControl>
                </div>
              </div>
              <div className="product-6 py-[32px]">
                <Link className="flex items-center bg-[#1e3932] py-[18px] px-[24px] w-[177px] rounded-[500px]">
                  <PiShootingStarLight className="mr-[8px] text-[#CBA258] text-2xl" />
                  <span className="text-[19px] text-white">Customize</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="product-4 mt-[64px] py-[32px] pr-[40px] pl-[131px] bg-[#1e3932] ">
          <div className="product-5 max-w-[50%] max-lg:max-w-[500px] max-lg:mx-auto">
            <p className="border-[#cba258] text-[14px] text-[#cba258] border-[1px] rounded-[6px] w-[86px] mb-[16px] px-[6px]">
              <span className="text-[#cba258]">200</span>
              <span className="text-[#cba258]">★</span>
              item
            </p>
            <p className="product-5-p text-[14px] text-[#FFFFFFB2] w-[430px]">
              Starbucks Blonde Espresso infused with Partanna® extra virgin
              olive oil, steamed with oatmilk. Velvety smooth. Deliciously lush.
            </p>
            <div className="pt-[16px]">
              <span className="text-[14px] text-[#fff]">
                270 calories, 4g sugar, 21g fat
              </span>
            </div>
            <Link className="mt-[24px] text-white font-[600] transition-[0.2] hover:bg-[rgba(0,0,0,.2)] border-[1px] inline-block py-[7px] px-[16px] leading-[1.2] rounded-[50px]">
              Full nutrition & ingredients list
            </Link>
          </div>
        </div>
        <div className="z-10 right-[5%] bottom-[20%] fixed">
          <button
            onClick={addOrder}
            className="font-[SodoSB] text-[19px] bg-[#01754A] text-white py-[18px] px-[24px] rounded-[50px] "
          >
            Add to Order
          </button>
        </div>
      </div>
      <Cart />
    </>
  );
}

export default Product;
