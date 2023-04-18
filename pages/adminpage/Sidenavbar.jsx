import React, { useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Products from "./products";
import Categories from "./category/categories";
import Link from "next/link";
import NewspaperIcon from "@mui/icons-material/Newspaper";

function Sidenavbar() {
  return (
    <div className="flex">
      <div className="w-[10vw] h-[95vh] border-r border-slate-100 shadow-2xl flex flex-col ">
        <div className="h-[85vh]  m-auto">
          <Link href="/adminpage">
            <div className="flex  m-auto text-center  bg-[var(--second-color)] text-white h-[45px] w-32 rounded-md mt-2">
              {/* <DashboardCustomizeIcon /> */}
              <p className="text-center m-auto">DashBoard</p>
            </div>
          </Link>
          <Link href="/adminpage/products">
            <div className="flex cursor-pointer  m-auto   bg-[var(--second-color)] text-white h-[45px] w-32 rounded-md mt-3">
              {/* <BusinessCenterIcon /> */}
              <p className="text-center m-auto">Products</p>
            </div>
          </Link>
          <Link href="/adminpage/category">
            <div className="flex  m-auto bg-[var(--second-color)]  text-white h-[45px] w-32 rounded-md mt-3">
              {/* <CategoryIcon /> */}
              <p className="text-center m-auto">Categories</p>
            </div>
          </Link>
          <Link href="/adminpage/Banner/banner">
            <div className="flex  m-auto  bg-[var(--second-color)]  text-white h-[45px] w-32 rounded-md mt-3">
              {/* <NewspaperIcon /> */}
              <p className="text-center m-auto">Banner</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidenavbar;
