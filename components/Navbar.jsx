import React from "react";
import { SearchOutlined } from "@ant-design/icons";

import Image from "next/image";

function Navbar() {
  return (
    <div className="h-20 bg-[white] shadow-md shadow-slate-100">
      <div className="w-screen flex justify-around items-center h-[100%]">
        <div>
          <Image src="/assets/sunn.png" width={80} height={80} alt="Logo" />
        </div>
        <div className="w-[30vw] relative">
          <input
            type="text"
            placeholder="Search  Products"
            className="input input-slate w-[30vw] h-[5vh] border-2 border-slate-200 text-xl -tracking-normal"
          ></input>
          <SearchOutlined className="absolute top-0  right-0 text-3xl backdrop-saturate-200 bg-[#000] opacity-75 h-[100%]  w-[53px] text-white rounded-md"></SearchOutlined>
        </div>
        <div className="w-[5vw]">
          <Image src="/assets/cart2.png" width={30} height={30} alt="Cart" />
          <p className="absolute top-3 right-[28.7vw] bg-[#82237c] p-1 h-7  w-7 text-center text-white rounded-full">
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
