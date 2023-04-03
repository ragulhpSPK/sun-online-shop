import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="h-20 bg-[white] shadow-md shadow-slate-100">
      <div className="w-screen flex justify-around items-center h-[100%]">
        <div>
          <Image src="/assets/sunn.png" width={80} height={80} alt="Logo" />
        </div>
        <div class="pt-2 relative w-[30vw] text-gray-600">
          <input
            class="border-2 border-gray-300 bg-white h-12 px-5 pr-16 w-[100%] rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
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
        <div className="w-[5vw]">
          <Image src="/assets/cart2.png" width={30} height={30} alt="Cart" />
          <p className="absolute top-4 right-[28vw] bg-[#82237c]  h-5  w-5 text-center text-sm text-white rounded-full">
            2
          </p>
        </div>
        <div>
          <p className="text-md text-[#82237c] font-medium">For Contact:</p>
          <p className="text-black font-semi-bold">123-534-8364</p>

          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
