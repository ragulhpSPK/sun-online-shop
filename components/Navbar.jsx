import React from "react";

function Navbar() {
  return (
    <div className="h-20 bg-[white] shadow-md shadow-slate-100">
      <div className="w-screen flex justify-around items-center h-[100%]">
        <div>
          <img src="/assets/sunn.png" className="xl:w-20 xsm:w-14" alt="Logo" />
        </div>
        <div class="pt-2 relative lg:w-[30vw] xsm:w-[50vw] text-gray-600">
          <input
            class="border-2 border-gray-300 bg-white xsm:h-8 xsm:w-[100%] lg:h-12 px-5 pr-16 lg:w-[100%] rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            class="absolute xsm:top-3 xsm:right-1 lg:right-0 lg:top-0 lg:mt-5 lg:mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
        <div className="xsm:min-w-[20px] lg:w-[5vw]">
          <img
            src="/assets/cart2.png"
            className="lg:w-10 xsm:w-[30px]"
            alt="Cart"
          />
          <p className="absolute xsm:top-[2vh] xsm:float-right xsm:right-[2vw] md:right-[5vw]  lg:top-3 lg:right-[27.7vw] bg-[#82237c] xsm:h-[20px] xsm:w-[20px] xsm:text-[16px]  lg:h-6  lg:w-6 text-center lg:text-md text-white rounded-full">
            2
          </p>
        </div>
        <div className="xsm:hidden lg:block">
          <p className="lg:text-md text-[#82237c] lg:font-medium ">
            For Contact:
          </p>
          <p className="text-black font-semi-bold  ">123-534-8364</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
