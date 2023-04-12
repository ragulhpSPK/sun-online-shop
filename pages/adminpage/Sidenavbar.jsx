import React, { useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Products from "./products";
import Categories from "./category/categories";
import Link from "next/link";

function Sidenavbar() {
  return (
    <div className="flex">
      <div className="w-[10vw] h-[95vh] border-r border-slate-100 shadow-2xl flex flex-col ">
        <div className="h-[85vh]  m-auto">
          <Link href="/adminpage">
            <div className="flex  m-auto pt-3 pl-2 bg-[var(--second-color)] text-white h-12 w-32 rounded-md mt-2">
              <DashboardCustomizeIcon />
              DashBoard
            </div>
          </Link>
          <Link href="/adminpage/products">
            <div className="flex cursor-pointer  m-auto pt-3 pl-2 bg-[var(--second-color)] text-white h-12 w-32 rounded-md mt-3">
              <BusinessCenterIcon />
              Products
            </div>
          </Link>
          <Link href="/adminpage/categories">
            <div className="flex  m-auto pt-3 bg-[var(--second-color)] pl-2 text-white h-12 w-32 rounded-md mt-3">
              <CategoryIcon />
              Categories
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidenavbar;
