import { Link } from "react-router-dom";
import Footer from "../../pages/Footer";
import Logo from "../../assets/img/logo.svg";
import {
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignIn() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="pb-[1.6rem] max-lg:pb-[1rem] pt-[1.6rem] max-lg:pt-[1rem] max-lg:px-[2rem] relative flex items-center px-[3rem] justify-between border-b-[3px] border[#EBEBEB]">
        <div className="cursor-pointer">
          <Link to="/">
            <img src={Logo} className="max-md:w-[40px]" alt="logo_img" />
          </Link>
        </div>
      </div>
      <div className="mx-auto md:pt-[48px] max-md:py-[24px] md:px-[40px]">
        <div className="flex flex-col items-center">
          <h1 className="md:pb-[48px] text-center text-[28px] max-md:text-[24px] font-[SodoB] text-[#000000de]">
            Sign in or create an account
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="md:mx-auto md:w-[40%] max-md:w-[80%] md:mb-[64px] md:border">
          <div className="">
            <form className="flex flex-col md:p-[32px]">
              <p className="flex">
                <p className="text-[#00754A] flex pr-[3px]">*</p> indicates
                required field
              </p>
              <div className="pt-[12px]">
                <div
                  className="relative py-[12px] px-[8px]"
                  data-te-input-wrapper-init
                >
                  <TextField
                    id="outlined-basic"
                    label="* Username or email address"
                    variant="outlined"
                    className="w-[100%]"
                    color="success"
                  />
                </div>
                <div className="relative pt-[12px]" data-te-input-wrapper-init>
                  <FormControl
                    sx={{ m: 1}}
                    variant="outlined"
                    color="success"
                    className="w-[95%] max-md:w-[97%]"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      * Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      className="w-[100%]"
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
                </div>
              </div>
              <div className="pb-[32px]">
                <div className="flex items-center pl-[9px] mb-[16px]">
                  <div>
                    <Checkbox {...label} color="success" />
                  </div>
                  <div>
                    <div className="flex">
                      <p className="font-[Sodo] text-[16px] max-md:text-[14px]">
                        Keep me signed in.
                        <Link className="text-[#006241] underline font-[Sodob] text-[16px] max-md:text-[14px]">
                          Details
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pl-[9px]">
                  <Link className="text-[#006241] underline font-[Sodob] text-[16px] max-md:text-[14px] mb-[16px]">
                    Forgot your username?
                  </Link>
                  <Link className="text-[#006241] underline font-[Sodob] max-md:text-[14px] text-[16px]">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div className="mt-[40px] flex justify-end">
                <Link className="bg-[#00754a] !text-[19px] !font-[SodoSB] !text-white inline-block px-[24px] py-[18px] rounded-[500px]">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-[40%] flex flex-col text-center">
          <div className="my-[32px] mx-[56px]">
            <div>
              <h2 className="uppercase text-[14px] font-[SodoB] text-[#00754a] mb-[8px] tracking-widest">
                Join Starbucks® Rewards
              </h2>
              <p className="mb-[16px] text-center text-[16px] font-[Sodo] text-[#000000de]">
                Join Starbucks® Rewards to earn free food and drinks, get free
                refills, pay and order with your phone, and more.
              </p>
              <Link className="text-[#00754a] font-[SodoSB] py-[5px] px-[16px] border border-[#00754a] rounded-[50px]">Join now</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SignIn;
