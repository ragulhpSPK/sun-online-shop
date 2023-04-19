import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Divider } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";

function Navbar() {
  const Quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="h-24 bg-[white] bg-fixed shadow-md shadow-slate-100 ">
      <div className=" bg-[#943074] text-white flex justify-around ">
        <div className="flex p-1">
          <p className="text-md font-bold text-white">follow us On</p>
          <FacebookIcon className="mr-1" />
          <InstagramIcon className="mr-1" />
        </div>
        <div className="flex p-1 font-bold text-[var(--first-color)]">
          <p className="pr-1 text-md text-white">Sign Up</p>
          <Divider orientation="vertical" color="white" />
          <p className="pl-1 text-md text-white">Login</p>
        </div>
      </div>
      <div className="w-screen flex justify-around items-center h-[60%]">
        <div className="pl-24">
          <img src="/assets/sunn.png" className="xl:w-20 xsm:w-14" alt="Logo" />
        </div>
        <div className="pt-2 relative lg:w-[36vw] xsm:w-[50vw] text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white xsm:h-8 xsm:w-[100%] lg:h-12 px-5 pr-16 lg:w-[100%] rounded-md text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute xsm:top-3 xsm:right-1 lg:right-0 lg:top-3  lg:mr-2 bg-[#943074]  px-4 py-1 rounded-md text-[#fff] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-white  "
            >
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
        <Link href="/cart">
          <div className="xsm:min-w-[20px] lg:w-[37px] relative">
            <img
              src="/assets/cart2.png"
              className="lg:w-7 xsm:w-[30px]"
              alt="Cart"
            />
            {Quantity === 0 ? (
              ""
            ) : (
              <p className="absolute  xsm:float-right   bg-[var(--second-color)] top-[-5px] right-0 xsm:h-[20px] xsm:w-[20px] xsm:text-[12px]  lg:h-5  lg:w-5 text-center lg:text-sm text-white rounded-full">
                {Quantity}
              </p>
            )}
          </div>
        </Link>

        <div className="xsm:hidden lg:block pr-[110px]">
          <p className="lg:text-md text-[var(--first-color)] text-xl lg:font-bold ">
            For Contact:
          </p>
          <p className="text-black font-semi-bold">123-534-8364</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
