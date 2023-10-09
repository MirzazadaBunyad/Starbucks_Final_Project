import {
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import Footer from "../../pages/Footer";
import Logo from "../../assets/img/logo.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";

function JoinNow() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="pb-[1.6rem] max-lg:pb-[1rem] pt-[1.6rem] max-lg:pt-[1rem] max-lg:px-[2rem] relative flex items-center px-[40px] justify-between border-b-[3px] border[#EBEBEB]">
        <div className="cursor-pointer">
          <Link to="/">
            <img src={Logo} alt="logo_img" />
          </Link>
        </div>
      </div>

      <div className="mx-auto md:w-[580px] max-md:w-[520px] md:pt-[48px] max-md:pt-[24px] px-[40px]">
        <div className="flex flex-col md:items-center">
          <h1 className="pb-[48px] max-md:pb-[24px] md:text-center text-[28px] max-md:text-[24px] font-[SodoB] text-[#000000de]">
            Create an account
          </h1>
          <h2 className="pb-[16px] text-[14px] text-[#00000094] font-[SodoB] tracking-widest text-center max-md:hidden">
            STARBUCKS® REWARDS
          </h2>
          <p className="w-[500px] md:text-center md:px-[8px] max-md:pb-[32px] md:pb-[48px] text-[#00000094] font-[Sodo] text-[14px] max-md:text-[13px]">
            Join Starbucks Rewards to earn Stars for free food and drinks, any
            way you pay. Get access to mobile ordering, a birthday Reward, and{" "}
            <Link className="!text-[#00000094] !decoration-[#00000094]">
              more
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="mx-auto md:w-[580px] max-md:w-[520px] mb-[64px] px-[40px] md:border">
        <div>
          <div>
            <form className="flex flex-col md:p-[56px]">
              <p className="max-md:text-[14px] font-[Sodo]">* indicates required field</p>
              <div className="md:pt-[32px] max-md:pt-[16px]">
                <div className="text-black text-[19px] max-md:text-[16px] font-[SodoSB] ml-[8px]">
                  Personal Information
                </div>
                <div
                  className="relative py-[12px] px-[8px]"
                  data-te-input-wrapper-init
                >
                  <TextField
                    color="success"
                    className="w-full"
                    id="outlined-basic"
                    label="* First name"
                    variant="outlined"
                  />
                </div>
                <div
                  className="relative py-[12px] px-[8px]"
                  data-te-input-wrapper-init
                >
                  <TextField
                    color="success"
                    className="w-full"
                    id="outlined-basic"
                    label="* Last name"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="pt-[8px] pb-[40px]">
                <div className=" text-black text-[19px] max-md:text-[16px] font-[SodoSB] ml-[8px]">
                  Account Security
                </div>
                <div
                  className="relative my-[8px] py-[12px] px-[8px]"
                  data-te-input-wrapper-init
                >
                  <TextField
                    color="success"
                    className="w-full"
                    id="outlined-basic"
                    label="* Email address"
                    variant="outlined"
                  />
                  <p className="pl-[20px] pt-[8px] text-[16px] max-md:text-[14px] font-[Sodo]">
                    This will be your username
                  </p>
                </div>
                <div
                  className="relative py-[12px] px-[8px]"
                  data-te-input-wrapper-init
                >
                  <FormControl
                    sx={{ m: 1}}
                    variant="outlined"
                    color="success"
                    className="w-full"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      * Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      className="w-full"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  <p className="pl-[16px] font-[Sodo] text-[14px] w-[360px] pt-[8px] text-[#000000DE]">
                    Create a password 8 to 25 characters long that includes at
                    least 1 uppercase and 1 lowercase letter, 1 number and 1
                    special character like an exclamation point or asterisk.
                  </p>
                </div>
              </div>
              <Link className="flex items-center !decoration-[#006241] max-md:text-[14px] pb-[40px] !font-[SodoB] !text-[#006241]">
                Already have a Starbucks gift card?{" "}
                <MdKeyboardArrowDown className="w-[20px] h-[20px]" />
              </Link>
              <div className="pb-[40px]">
                <h2 className="mb-[24px] text-[#00000094] font-[SodoB] text-[14px] max-md:text-[13px] tracking-widest">
                  COLLECT MORE STARS & EARN REWARDS
                </h2>
                <p className="mb-[16px] font-[Sodo] text-[14px]">
                  Email is a great way to know about offers and what’s new from
                  Starbucks.
                </p>
                <div className="flex items-start">
                  <div>
                    <Checkbox {...label} color="success" />
                  </div>
                  <div className="flex flex-col pl-[10px] mt-[8px]">
                    <p className="font-[Sodo] text-[16px] max-md:text-[14px]">
                      Yes, I’d like email from Starbucks
                    </p>
                    <p className="text-[#00000094] text-[14px] font-[Sodo] mt-[16px]">
                      Know about initiatives, announcements and product offers.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-[24px] text-[#00000094] text-[14px] max-md:text-[13px] font-[SodoB] tracking-widest">
                  TERMS OF USE
                </h2>
                <div className="flex items-start">
                  <div>
                    <Checkbox {...label} color="success" />
                  </div>
                  <div className="mt-[8px]">
                    <p className="ml-[10px] text-[14px] font-[Sodo]">
                      I agree to the{" "}
                      <Link className="!decoration-[#006241] !text-[#006241]">
                        Starbucks® Rewards Terms
                      </Link>{" "}
                      and the{" "}
                      <Link className="!decoration-[#006241] !text-[#006241]">
                        Starbucks Card Terms
                      </Link>{" "}
                      and have read the{" "}
                      <Link className="!decoration-[#006241] !text-[#006241]">
                        Starbucks Privacy Statement
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[40px] flex justify-end">
                <Link className="bg-[#00754a] !text-[19px] !font-[SodoSB] !text-white inline-block px-[24px] py-[18px] rounded-[500px]">
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default JoinNow;
