import { Link } from "react-router-dom";

function Featured() {
  return (
    <>
        <section className="py-[32px] mb-10 flex justify-center">
          <strong className="text-[50px] max-lg:text-[28px] text-[#1e3932] ">
            Yum in the sun
          </strong>
        </section>
      <section className="max-md:flex-col-reverse my-2  flex pb-[33px]">
        <div className="py-[24px] px-[32px] bg-[#EB81A5] md:w-[50%] flex justify-center flex-col text-center items-center pb-[32px]">
          <h1 className=" text-[#1e3932] max-md:text-[24px] lg:px-[20%] font-[SodoSB] text-[36px] pb-[3%] leading-tight">
            New Frozen Lemonade Starbucks Refreshers® Beverages
          </h1>
          <p className="text-[#1e3932] lg:px-[15%] max-md:text-[22px] text-[24px] font-[Sodo] mb-[40px] text-center">
            Strawberry Açaí, Pineapple Passionfruit and Mango Dragonfruit with
            real fruit pieces blended with lemonade.
          </p>
          <Link className="font-[SodoSB] max-md:text-[14px] hover:bg-[#00000033] duration-[0.3s] border border-[#1e3932] rounded-[20px] py-[5px] px-[15px] text-center text-[#1e3932]">
            Order now
          </Link>
        </div>
        <div className="md:w-[50%] lg:w-[50%] bg-[#eb81a5] flex justify-center items-center">
          <img
            src="../src/assets/img/img2.jpg"
            className="max-w-[100%]"
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="max-md:flex-col flex justify-between  ">
          <div className="lg:w-[50%] max-md:mb-[2rem] flex flex-col">
            <div className=" bg-[#8f8bf4] pb-[8px]">
              <img
                className=""
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84461.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="bg-[#8f8bf4] px-[40px] pb-[32px] flex flex-col justify-center items-center text-center">
                <h2 className="text-[24px] max-md:text-[22px] mb-[24px] font-[SodoSB]">
                  Caramel Ribbon Crunch Frappuccino® Blended Beverage
                </h2>
                <p className="text-[19px] max-md:text-[16px] font-[Sodo]">
                  A blend of coffee, milk and ice with dark caramel sauce and a
                  crunchy caramel-sugar topping.​
                </p>
                <Link className="mt-[32px] max-md:text-[14px] py-[7px] px-[16px] hover:bg-[#00000033] duration-[0.3s] text-[16px] font-[Sodo] border-[1px] border-black rounded-[50px]">
                  Order now
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] md:ml-[1.6rem]">
            <div className="bg-[#8f8bf4] pb-[8px]">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84461.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="bg-[#8f8bf4] px-[40px] pb-[32px] flex flex-col justify-center items-center text-center">
                <h2 className="text-[24px] max-md:text-[22px] mb-[24px] font-[SodoSB]">
                  Mocha Cookie Crumble Frappuccino® Blended Beverage
                </h2>
                <p className="text-[19px] font-[Sodo] max-md:text-[16px]">
                  Frappuccino® chips, mocha sauce and chocolaty cookie crumbles
                  join coffee, milk and ice.
                </p>
                <Link className="mt-[32px] py-[7px] px-[16px] max-md:text-[14px] hover:bg-[#00000033] duration-[0.3s] text-[16px] font-[Sodo] border-[1px] border-black rounded-[50px]">
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" max-md:flex-col mt-[3.2rem] flex">
        <div className="md:w-[50%] bg-[#F1FF67] flex justify-center items-center">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84463.jpg"
            className="max-w-[100%]"
            alt=""
          />
        </div>
        <div className="bg-[#F1FF67] md:w-[50%] flex justify-center flex-col text-center items-center">
          <h1 className="pt-[30px] text-[#1e3932] max-md:text-[28px] md:px-[20%] font-[SodoSB] text-[50px] pb-[3%] leading-tight">
            Chocolate Cream Cold Brew
          </h1>
          <p className="text-[#1e3932] md:px-[15%] text-[24px] max-md:text-[22px] font-[Sodo] mb-[40px] text-center">
            Chocolaty cold foam tops our super-smooth cold brew with notes of
            vanilla.
          </p>
          <Link className="font-[SodoSB] max-md:text-[14px] mb-[16px] hover:bg-[#00000033] duration-[0.3s] border border-[#1e3932] rounded-[20px] py-[5px] px-[15px] text-center text-[#1e3932]">
            Order now
          </Link>
        </div>
      </section>
      <section>
        <div className="flex justify-between my-5 max-md:flex-col">
          <div className="md:w-[50%]  flex flex-col">
            <div className=" bg-[#FC6446] pb-[8px]">
              <img
                className=""
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84528.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="bg-[#FC6446] px-[40px] pb-[32px] flex flex-col justify-center items-center text-center">
                <h2 className="text-[24px] max-md:text-[22px] mb-[24px] font-[SodoSB]">
                  Spinach, Feta & Egg White Wrap
                </h2>
                <p className="text-[19px] max-md:text-[16px] font-[Sodo]">
                  Cage-free egg whites, spinach and feta cheese wrapped in a
                  whole-wheat tortilla.
                </p>
                <Link className="max-md:text-[14px] mt-[32px] py-[7px] px-[16px] text-[16px] hover:bg-[#00000033] duration-[0.3s] font-[Sodo] border-[1px] border-black rounded-[50px]">
                  Order now
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] md:ml-[1.6rem] max-md:mt-[2rem]">
            <div className="bg-[#FC6446] pb-[8px]">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84528.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="bg-[#FC6446] px-[40px] pb-[32px] flex flex-col justify-center items-center text-center">
                <h2 className="text-[24px] max-md:text-[22px] mb-[24px] font-[SodoSB]">
                  Impossible™ Breakfast Sandwich
                </h2>
                <p className="text-[19px] font-[Sodo] max-md:text-[16px]">
                  An Impossible™ Sausage Patty Made From Plants, a cage-free
                  fried egg and Cheddar on a sesame ciabatta bun.*
                </p>
                <Link className="mt-[32px] max-md:text-[14px] hover:bg-[#00000033] duration-[0.3s] py-[7px] px-[16px] text-[16px] font-[Sodo] border-[1px] border-black rounded-[50px]">
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-2 flex max-md:flex-col-reverse">
        <div className="max-lg:px-[24px] max-lg:py-[32px] pb-[32px] bg-[#006421] lg:w-[50%] flex justify-center  flex-col text-center items-center">
          <h1 className="pt-[30px] text-white max-md:text-[22px] md:px-[20%] font-[SodoSB] text-[24px] pb-[3%] leading-tight">
            A New Blend Created by Our Baristas
          </h1>
          <p className="text-white max-md:text-[16px] lg:px-[15%] text-[19px] font-[Sodo] mb-[40px] text-center">
            Introducing Starbucks® Green Apron Blend™, from those who know our
            coffee best. Enjoy its honeybell orange and graham cracker notes hot
            or over ice—just like our baristas do.
          </p>
          <Link className="font-[SodoSB] max-md:text-[14px] hover:bg-[#00000033] duration-[0.3s] border border-white rounded-[20px] py-[5px] px-[15px] text-center text-white">
            Order now
          </Link>
        </div>
        <div className="bg-[#006421] lg:w-[50%] flex justify-center items-center">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84465.jpg"
            className="max-w-[100%]"
            alt=""
          />
        </div>
      </section>
      <section className="mt-[1rem]">
        <div className="py-[32px] flex justify-center">
          <p className="text-[14px] font-[Sodo] max-md:text-[13px]">
            *Impossible is a trademark of Impossible Foods Inc. Used under
            license.
          </p>
        </div>
      </section>
    </>
  );
}
export default Featured;
