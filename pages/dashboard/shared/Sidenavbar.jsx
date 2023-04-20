import React, { useState } from "react";
import Link from "next/link";

function Sidenavbar() {
  return (
    <div className="flex fixed top-[94px]">
      <div className="w-[9.5vw] h-[95vh] border-r  border-slate-100 shadow-2xl flex flex-col ">
        <div className="h-[85vh]  m-auto">
          <Link href="/dashboard">
            <div className="flex  m-auto text-center hover:bg-[#821382]  hover:bg-left-bottom hover:duration-1000  bg-[var(--second-color)] text-white h-[45px] w-32 rounded-md mt-2">
              {/* <DashboardCustomizeIcon /> */}
              <p className="text-center m-auto hover:scale-110 duration-1000">
                DashBoard
              </p>
            </div>
          </Link>
          <Link href="/dashboard/products">
            <div className="flex cursor-pointer  m-auto   bg-[var(--second-color)] hover:bg-[#821382] hover:bg-left-bottom hover:duration-1000 text-white h-[45px] w-32 rounded-md mt-3">
              {/* <BusinessCenterIcon /> */}
              <p className="text-center m-auto hover:scale-110 duration-1000">
                Products
              </p>
            </div>
          </Link>
          <Link href="/dashboard/category">
            <div className="flex  m-auto bg-[var(--second-color)] hover:bg-[#821382] hover:bg-left-bottom hover:duration-1000  text-white h-[45px] w-32 rounded-md mt-3">
              {/* <CategoryIcon /> */}
              <p className="text-center m-auto hover:scale-110 duration-1000">
                Categories
              </p>
            </div>
          </Link>
          <Link href="/dashboard/Banner/banner">
            <div className="flex  m-auto  bg-[var(--second-color)] hover:bg-[#821382] hover:bg-left-bottom hover:duration-1000  text-white h-[45px] w-32 rounded-md mt-3">
              {/* <NewspaperIcon /> */}
              <p className="text-center m-auto hover:scale-110 duration-1000">
                Banner
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidenavbar;
