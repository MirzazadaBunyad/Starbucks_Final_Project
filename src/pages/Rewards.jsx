import { Link } from "react-router-dom";
import RewardsStars from "../components/UI/RewardsStars";
import { BsBoxArrowUpRight } from "react-icons/bs";

function Rewards() {
  return (
    <main>
      <section className="flex max-md:justify-between sticky top-0 justify-start items-center max-md:px-[16px] md:px-[40px] bg-[#1E3932] h-[50px]">
        <h1 className="text-white text-[14px] max-md:text-[13px] tracking-widest font-[SodoB] uppercase">
          Starbucks® Rewards
        </h1>
        <Link className="md:hidden rounded-[50px] border-[1px] py-[5px] px-[16px] hover:bg-[rgba(0,0,0,.2)] transition-[0.3] font-[SodoSB] text-[14px] text-white">Join in the app</Link>
      </section>
      <section className="pb-[64px]">
        <div className="flex h-[100vh] max-md:flex-col">
          <div className="px-[40px] md:pt-[18%] max-md:pt-[32px] md:w-[40%] max-md:flex max-md:flex-col max-md:items-center max-md:text-center !bg-[#D4E9E2]">
            <h2 className="text-[36px] max-md:text-[28px] font-[SodoSB]  leading-[1.3] pb-[15px]">
              FREE COFFEE <br /> IS A TAP AWAY
            </h2>
            <p className="text-[19px] max-md:text-[16px] font-[Sodo] pb-[32px]">
              Join now to start earning Rewards.
            </p>
            <Link className="py-[6px] px-[16px] font-[Sodo] bg-[#158159] text-white rounded-[20px]">
              Join now
            </Link>
            <p className="mt-[19px] text-[19px] max-md:text-[16px] w-full">
              Or <Link className="underline">join in the app</Link> for the best
              experience
            </p>
          </div>
          <div className="max-md:w-full max-md:h-[1000px] max-md:justify-center rewards1 !bg-[#D4E9E2] md:w-[60%]"></div>
        </div>
      </section>
      <section className="pt-[64px] max-md:p-0">
        <div className="text-center">
          <h2 className="text-[28px] max-md:text-[24px] font-[SodoSB] text-[#000000DE]">
            Getting started is easy
          </h2>
          <p className="text-[14px] pt-[16px]">
            Earn Stars and get rewarded in a few easy steps.
          </p>
        </div>
        <div className="max-md:pt-[48px] max-md:pl-[16px] pt-[48px] px-[40px] py-[64px]">
          <div className="max-md:flex-col flex md:mx-[65px]">
            <div className="max-md:flex-row max-md:w-full max-md:text-start max-md:pb-[32px] mr-[24px] w-[33%] text-center flex flex-col items-center">
              <img
                src="../../src/assets/img/rewards2.jpg"
                className="w-[48px] mx-[106px] pb-[24px] max-md:m-0"
                alt=""
              />
              <div className="max-md:flex-col max-md:pl-[16px]">
                <h3 className="text-[19px] max-md:text-[16px] font-[SodoSB]">
                  Create an account
                </h3>
                <p className="text-[14px] pt-[14px]">
                  To get started, join now. You can also join in the app to get
                  access to the full range of Starbucks® Rewards benefits.
                </p>
              </div>
            </div>
            <div className="max-md:flex-row max-md:w-full max-md:text-start max-md:pb-[32px] mr-[24px] w-[33%] text-center flex flex-col items-center">
              <img
                src="../../src/assets/img/rewards3.jpg"
                className="w-[48px] mx-[106px] pb-[24px] max-md:m-0"
                alt=""
              />
              <div className="max-md:flex-col max-md:pl-[16px]">
                <h3 className="text-[19px] max-md:text-[16px] font-[SodoSB]">
                  Order and pay how you’d like
                </h3>
                <p className="text-[14px] pt-[14px]">
                  Use cash, credit/debit card or save some time and pay right
                  through the app. You’ll collect Stars all ways.
                  <Link className="underline text-[#00644D]">Learn how</Link>
                </p>
              </div>
            </div>
            <div className="max-md:flex-row max-md:w-full max-md:text-start max-md:pb-[32px] mr-[24px] w-[33%] text-center flex flex-col items-center">
              <img
                src="../../src/assets/img/rewards4.jpg"
                className="w-[48px] mx-[106px] pb-[24px] max-md:m-0"
                alt=""
              />
              <div className="max-md:flex-col max-md:pl-[16px]">
                <h3 className="text-[19px] max-md:text-[16px] font-[SodoSB]">
                  Earn Stars, get Rewards
                </h3>
                <p className="text-[14px] pt-[14px]">
                  As you earn Stars, you can redeem them for Rewards—like free
                  food, drinks, and more. Start redeeming with as little as 25
                  Stars!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[64px]">
        <div className="pt-[64px] bg-[#F1F8F5]">
          <h2 className="text-center font-[SodoSB] text-[28px] pb-[48px]">
            Get your favorites for free
          </h2>
        </div>
        <div>
          <RewardsStars />
        </div>
      </section>
      <section className="py-[64px] max-md:px-[16px] md:px-[40px]">
        <div className="text-center flex flex-col  justify-center items-center">
          <h2 className="text-[28px] max-md:text-[24px] font-[SodoSB]">
            Endless Extras
          </h2>
          <p className="pt-[16px] text-center text-[#212121] leading-[30px] md:w-[50%] max-md:text-[16px]">
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say hello to easy ordering, tasty Rewards and—yes, free
            coffee.
          </p>
        </div>
        <div className="md:flex pt-[48px]">
          <div className="mr-[24px] max-md:flex max-md:flex-row max-md:text-start">
            <img
              className="md:mx-auto max-md:mr-[16px] w-[112px] h-[112px] mb-[24px] "
              src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
              alt=""
            />
            <div className="">
              <h3 className="text-[19px] max-md:text-[16px] font-[SodoSB] md:text-center">
                Fun freebies
              </h3>
              <p className="pt-[16px] max-md:text-[14px] leading-[25px] md:text-center ">
                Not only can you earn free coffee, look forward to a birthday
                treat plus coffee and tea refills.
              </p>
              <Link className="my-[16px] max-md:text-[14px] font-[Sodo] flex md:justify-center text-[#036141] underline">
                Learn more
              </Link>
            </div>
          </div>
          <div className="md:mx-[24px] max-md:flex max-md:flex-row">
            <img
              className="md:mx-auto max-md:mr-[16px] w-[112px] h-[112px] mb-[24px]"
              src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
              alt=""
            />
            <div className="">
              <h3 className=" font-[SodoSB] max-md:text-[16px] text-[19px] md:text-center">
                Order & pay ahead
              </h3>
              <p className="pt-[16px] max-md:text-[14px] leading-[25px] md:text-center ">
                Enjoy the convenience of in-store, curbside or drive-thru pickup
                at select stores.
              </p>
              <Link className="my-[16px] max-md:text-[14px] flex font-[Sodo] md:justify-center text-[#036141] underline">
                Learn more
              </Link>
            </div>
          </div>
          <div className="max-md:flex max-md:flex-row">
            <img
              className="md:mx-auto max-md:mr-[16px] w-[112px] h-[112px] mb-[24px]"
              src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
              alt=""
            />
            <div className="">
              <h3 className=" font-[SodoSB] max-md:text-[16px] text-[19px] md:text-center">
                Get to free faster
              </h3>
              <p className="pt-[16px] max-md:text-[14px] leading-[25px] md:text-center ">
                Earn Stars even quicker with Bonus Star challenges, Double Star
                Days and exciting games.
              </p>
              <Link className="my-[16px] max-md:text-[14px] font-[Sodo] flex md:justify-center text-[#036141] underline">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[32px]  bg-[#F2F0EA]">
        <div className="py-[48px] max-md:py-[48px] max-md:px-[16px] px-[40px] ">
          <div className="mb-[24px] mx-auto flex flex-col items-center text-center pb-[64px]">
            <h2 className="text-[28px] max-md:text-[24px] pb-[16px] font-[SodoSB]">
              Cash or card, you earn Stars
            </h2>
            <p className="text-center text-[#1F1F1E] md:w-[50%] leading-[25px] max-md:text-[14px] font-[Sodo]">
              No matter how you pay, you can earn Stars with your morning
              coffee. Those Stars add up to (really delicious) Rewards.
            </p>
          </div>
          <div className="flex max-lg:flex-col ">
            <div className="mr-[20px] min-w-[140px] max-lg:pb-[32px] ">
              <p className="font-[SodoSB]">
                <span className="text-[24px] max-md:text-[19px]">1</span>
                <span aria-hidden="true" className="text-black text-[17px] ">
                  ★
                </span>
                <span className="text-[24px]"></span>&nbsp;
                <span className="text-[24px] max-md:text-[19px]">per dollar</span>
              </p>
              <p className="md:pt-[5px] max-md:text-[16px] font-[Sodo]">Pay as you go</p>
            </div>

            <div className="flex max-md:flex-col max-lg:flex-row">
              <div className="flex px-[24px] lg:w-full lg:pr-[8px]">
                <div className="pr-[16px] ">
                  <img
                    className="min-w-[90px] max-md:w-[90%] h-[158px]"
                    src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[19px] max-md:text-[16px] font-[SodoSB]">
                    Scan and pay separately
                  </h3>
                  <p className="leading-[24px] max-md:text-[14px] text-[#1F1F1E] pt-[16px] md:min-w-[150px] md:max-w-[290px] font-[Sodo]">
                    Use cash or credit/debit card at the register.
                  </p>
                </div>
              </div>
              <div className="flex px-[24px] lg:w-full lg:pr-[8px]">
                <div className="pr-[32px]">
                  <img
                    className="min-w-[90px] h-[158px]"
                    src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[19px] max-md:text-[16px] font-[SodoSB]">
                    Save payment in the app
                  </h3>
                  <p className="pt-[16px] max-md:text-[14px] text-[#1F1F1E] min-w-[150px] font-[Sodo] md:max-w-[290px] text-[16px] leading-[24px]">
                    Check-out faster by saving a credit/debit card or PayPal to
                    your account. You’ll be able to order ahead or scan and pay
                    at the register in one step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-[99%] mt-[24px] mb-[48px] m-auto h-[1.5px] bg-[#D9D8D2]" />

          <div className="flex max-md:flex-col max-lg:flex-col ">
            <div className="mr-[20px] min-w-[140px] max-lg:pb-[32px] ">
              <p className="font-[SodoSB]">
                <span className="text-[24px] max-md:text-[19px]">2</span>
                <span aria-hidden="true" className="text-black text-[17px] ">
                  ★
                </span>
                <span className="text-[24px]"></span>&nbsp;
                <span className="text-[24px] max-md:text-[19px]">per dollar</span>
              </p>
              <p className="pt-[5px] font-[Sodo] max-md:text-[14px]">Add funds in the app</p>
            </div>
            <div className="flex max-md:flex-col max-lg:flex-row">
              <div className="flex px-[24px] lg:w-full lg:pr-[8px]">
                <div className="pr-[16px] ">
                  <img
                    className="min-w-[90px] max-md:w-[90%] h-[158px]"
                    src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[19px] max-md:text-[16px] font-[SodoSB]">Preload</h3>
                  <p className="leading-[24px] max-md:text-[14px] text-[#1F1F1E] pt-[16px] min-w-[150px] md:max-w-[290px] font-[Sodo]">
                    To save time and earn Stars twice as fast, add money to your
                    digital Starbucks Card using any payment option. Scan and
                    pay in one step or order ahead in the app.
                  </p>
                </div>
              </div>
              <div className="flex px-[24px] lg:w-full lg:pr-[8px]">
                <div className="pr-[16px]">
                  <img
                    className="min-w-[90px] h-[158px]"
                    src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[19px] font-[SodoSB] max-md:text-[16px]">
                    Register your gift card
                  </h3>
                  <p className="pt-[16px] max-md:text-[14px] text-[#1F1F1E] min-w-[150px] font-[Sodo] md:max-w-[290px] text-[16px] leading-[24px]">
                    Then use it to pay through the app. You can even consolidate
                    balances from multiple cards in one place.ne step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-star bg-cover bg-[url('https://www.starbucks.com/app-assets/844262945b2a8b8cfb293156e2583872.png')] h-[90vh] flex justify-center">
        <div className="bg-[#D4E8E2] flex items-center h-[90%] w-[96%] m-auto">
          <div className="w-[40%]">
            <img
              src="https://www.starbucks.com/app-assets/7997fb008f368630d3ca3c1194fd8404.svg"
              alt=""
            />
          </div>
          <div className="w-[100%] flex flex-col items-center">
            <h2 className="text-center text-[28px] font-[SodoSB] pt-[16px]">
              Keep the Rewards Coming
            </h2>
            <p className="text-center pt-[16px] text-[16px] md:w-[60%] font-[Sodo]">
              The Rewards don't stop at your morning coffee. Join Starbucks®
              Rewards and unlock perks from our partners, all while earning more
              Stars.
            </p>
            <img
              className=" w-[195px] pt-[32px]"
              src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png"
              alt=""
            />
            <p className="text-center md:w-[60%] pt-[10px] text-[16px] font-[Sodo]">
              <Link className="text-[#116142] underline">
                Link your Delta SkyMiles®
              </Link>
              and Starbucks® Rewards accounts to earn 1 mile per $1* spent at
              Starbucks and double Stars on Delta travel days.
            </p>
            <Link className="font-[SodoSB] border-none mt-[24px] mb-[8px] rounded-[20px] pt-[5px] px-5 text-white pb-[7px] bg-[#158159]">
              Join Starbucks® Rewards
            </Link>
          </div>
          <div className="w-[40%]">
            <img
              src="https://www.starbucks.com/app-assets/b7e1b20df72e802cb1cf0e97e8fe21d0.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="md:px-[40px] max-md:px-[16px] py-[64px]">
        <div className="md:ml-[17%] md:w-[50%]">
          <h2 className="pb-[16px] text-[28px] max-md:text-[24px] font-[SodoSB]">Questions?</h2>
          <p className="pb-[16px] max-md:text-[14px] font-[Sodo]">
            We want to help in any way we can. You can ask your barista anytime
            or we’ve answered the most commonly asked questions
            <Link className="text-[#046240] inline-flex pl-[3px] underline">
              <span>right over here</span>
              <BsBoxArrowUpRight className="pl-[5px] text-[18px]" />
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="pt-[32px] mb-[48px]">
        <div className="rew-wr px-[40px] py-[48px] bg-[#F9F9F9]">
          <div className="pb-[16px] font-[Sodo]">
            <p className="text-[14px] max-md:text-[13px] pb-[8px] text-[#000000DE]">
              At participating stores. Restrictions apply.
            </p>
            <p className="text-[14px] max-md:text-[13px] pb-[8px] text-[#000000DE]">
              * Excludes taxes and gratuities. At participating stores. Some
              restrictions apply. Flights purchased close to departure may not
              earn double Stars.
            </p>
            <p className="text-[14px] max-md:text-[13px] pb-[8px] text-[#000000DE]">
              Stars and miles may not be earned on purchases of alcohol,
              Starbucks Cards and Starbucks Card reloads. For details, visit
              <Link className="text-[#046240] underline inline-flex">
                starbucks.com/terms
                <BsBoxArrowUpRight className="pl-[5px] text-[18px]" />.
              </Link>
            </p>
          </div>
          <div>
            <div className="rew-write flex">
              <div className="w-[50%] pb-[32px] font-[Sodo]">
                <h2 className="text-[#00000094] font-[SodoSB] text-[14px] max-md:text-[13px] pb-[16px]">
                  EARNING STARS
                </h2>
                <p className="pb-[16px] text-[14px] max-md:text-[13px]">
                  Stars cannot be earned on purchases of alcohol, Starbucks
                  Cards or Starbucks Card reloads.
                </p>
                <p className="pb-[16px] text-[14px] max-md:text-[13px]">
                  Earn 1 Star per $1 spent when you scan your member barcode in
                  the app, then pay with cash, credit/debit cards or mobile
                  wallets at participating stores. You can also earn 1 Star per
                  $1 spent when you link a payment method and pay directly
                  through the app.
                </p>
                <p className="text-[14px] max-md:text-[13px]">
                  Earn 2 Stars per $1 spent when you load funds and pay with
                  your digital Starbucks Card in the app. You can also earn 2
                  Stars per $1 spent when you pay in-person at a participating
                  store with your registered physical Starbucks Card or scan
                  your member barcode in the app, and then use any physical
                  Starbucks Card (regardless of whether it is registered) to
                  complete the purchase.
                </p>
              </div>
              <div className="max-md:p-0 w-[50%] !pb-[32px] pl-[32px] text-[14px] max-md:text-[13px] font-[Sodo]">
                <h2 className="pb-[16px] text-[#00000094] font-[SodoSB] max-md:text-[13px] text-[14px]">
                  TERMS OF USE
                </h2>
                <p className="pb-[16px] text-[14px] max-md:text-[13px]">
                  For full program details visit{" "}
                  <Link className="text-[#046240] underline inline-flex">
                    starbucks.com/rewards/terms
                    <BsBoxArrowUpRight className="pl-[5px] text-[18px]" />.
                  </Link>
                </p>
                <p className="pb-[16px] text-[14px] max-md:text-[13px]">
                  Earn 1 Star per $1 when digitally loading your Starbucks Card
                  with your Starbucks® Rewards Visa® Card: See your Card Rewards
                  Program Agreement for more details.
                </p>
                <p className="pb-[16px] max-md:text-[13px]">
                  Starbucks® Rewards benefits are available at participating
                  Starbucks stores. Not all stores have the ability to honor
                  Rewards at this time. Visit the
                  <Link className="text-[#046240] underline inline-flex">
                    Starbucks Store Locator
                    <BsBoxArrowUpRight className="pl-[5px] text-[18px] max-md:text-[13px]" />
                  </Link>
                  and search for locations honoring “Redeem Rewards”.
                </p>
                <p className="text-[14px] max-md:text-[13px]">
                  Deposit and credit card products provided by JPMorgan Chase
                  Bank, N.A. Member FDIC
                </p>
              </div>
            </div>
            <div className="rew-write flex">
              <div className="w-[50%] font-[Sodo]">
                <h2 className="text-[14px] max-md:text-[13px] pb-[16px] text-[#00000094] font-[SodoSB]">
                  BENEFITS
                </h2>
                <p className="text-[14px] max-md:text-[13px]">
                  Free refills available during same in-store visit only. To
                  qualify for the Birthday Reward, you must have made at least
                  one Star-earning transaction.
                </p>
              </div>
              <div className="max-md:p-0 w-[50%] pl-[32px] font-[Sodo]">
                <h2 className="text-[14px] max-md:text-[13px] pb-[16px] text-[#00000094] font-[SodoSB]">
                  REDEEMING REWARDS
                </h2>
                <p className="text-[14px] max-md:text-[13px] text-[#000000DE]">
                  Rewards cannot be redeemed for alcoholic beverages or
                  multi-serve items. You pay the difference for any beverage
                  customization over $1 and/or merchandise item over $20. Not
                  all stores honor tiered Rewards. Select stores redeem 200
                  Stars for free food or drink items only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Rewards;
