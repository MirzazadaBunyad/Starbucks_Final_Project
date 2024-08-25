import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="px-[40px] max-md:p-0">
      <div className="max-md:flex-col-reverse flex pb-[33px] pt-[2rem]">
        <div className="bg-[#EB81A5] max-md:w-full md:w-[50%] max-md:py-[32px] max-md:px-[24px] flex justify-center flex-col text-center items-center">
          <h1 className="pt-[30px] text-[#1e3932] max-lg:text-[28px] px-[20%] font-[SodoSB] text-[50px] pb-[3%] leading-tight">
            Talk about refreshing
          </h1>
          <p className="text-[#1e3932] md:px-[15%] font-[Sodo] text-[24px] max-md:text-[22px] mb-[40px] text-center">
            Introducing our vibrant new Frozen Lemonade Starbucks Refreshers®
            beverages: Strawberry Açaí, Pineapple Passionfruit and Mango
            Dragonfruit.
          </p>
          <Link className="hover:bg-[#00000033] max-md:text-[14px] mb-10 font-[Sodo] duration-[0.3s] border border-[#1e3932] rounded-[20px] py-[5px] px-[15px] text-center text-[#1e3932]">
            Order now
          </Link>
        </div>
        <div className="md:w-[50%] bg-[#EB81A5] max-md:w-full flex justify-center items-center">
          <img
            src="/src/assets/img/img2.jpg"
            className="max-w-[100%]"
            alt=""
          />
        </div>
      </div>

      <div className="max-md:flex-col flex pt-[30px] pb-[33px]">
        <div className="max-md:w-full max-lg:w-1/2 bg-[#D4E9E2] md:w-[50%] flex justify-center items-center">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85086.jpg"
            className="max-w-[100%]"
            alt=""
          />
        </div>
        <div className="bg-[#D4E9E2] md:w-[50%] flex justify-center flex-col text-center items-center">
          <h1 className="pt-[30px] text-black px-[20%] font-[SodoSB] text-[24px] max-md:text-[22px] pb-[3%]">
            Soak up delicious Rewards
          </h1>
          <p className="text-black md:px-[10%] max-md:text-[16px] font-[Sodo] text-[19px] mb-[40px] text-center">
            You’re closer than you think to free drinks & food.*{" "}
          </p>
          <Link className="hover:bg-[#00000033] mb-10 max-md:text-[14px] font-[Sodo] duration-[0.3s] border border-black rounded-[20px] py-[5px] px-[15px] text-center text-black">
            Join now
          </Link>
        </div>
      </div>

      <div className="max-md:flex-col-reverse flex pb-[33px]">
        <div className="bg-[#8F8BF4] md:w-[50%] flex justify-center flex-col text-center items-center">
          <h1 className="max-lg:text-[28px] pt-[30px] text-black font-[SodoSB] text-[50px] pb-[3%]">
            Summer to the max
          </h1>
          <p className="text-black md:px-[15%] max-md:text-[22px] text-[24px] font-[Sodo] mb-[40px] text-center">
            Go for a Mocha Cookie Crumble or Caramel Ribbon Crunch Frappuccino®
            blended beverage.
          </p>
          <Link className="hover:bg-[#00000033] max-md:text-[14px] mb-10 font-[Sodo] duration-[0.3s] border border-black rounded-[20px] py-[5px] px-[15px] text-center text-black">
            Order now
          </Link>
        </div>
        <div className="bg-[#8F8BF4] w-[50%] max-md:w-full flex justify-center items-center">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84930.jpg"
            className="max-w-[100%]"
            alt=""
          />
        </div>
      </div>

      <div className="max-md:flex-col flex pb-[33px]">
        <div className="bg-[#F1FF67] md:w-[50%] max-md:w-full flex justify-center items-center">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84933.jpg"
            className="max-w-[100%]"
            alt=""
          />
        </div>
        <div className="bg-[#F1FF67] md:w-[50%] flex justify-center flex-col text-center items-center">
          <h1 className=" text-black px-[15%] pt-[30px] font-[SodoSB] max-lg:text-[28px] text-[50px] pb-[3%]">
            Follow the buzz
          </h1>
          <p className="text-black md:px-[15%] text-[24px] max-md:text-[22px] font-[Sodo] mb-[40px] text-center">
            This adorable Bumblebee Cake Pop dipped in chocolatey icing has
            landed.
          </p>
          <Link className="hover:bg-[#00000033] max-md:text-[14px] mb-10 font-[Sodo] duration-[0.3s] border border-black rounded-[20px] py-[5px] px-[15px] text-center text-black">
            Order now
          </Link>
        </div>
      </div>

      <div className="lg:px-[32px] flex justify-center">
        <div className="py-[48px] max-md:px-[50px] lg:max-w-[50%] text-center">
          <p className="font-[Sodo] text-[14px] max-md:text-[13px]">
            *Starbucks Rewards is available at participating stores. Some
            restrictions apply. See{" "}
            <Link className="underline">https://starbucks.com/rewards</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
