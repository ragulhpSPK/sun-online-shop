import React, { useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Products from "./products";
import Categories from "./categories";

function DashBoard() {
  const [product, setProduct] = useState(false);
  const [category, setCategory] = useState(false);

  const clickCategory = () => {
    setProduct(false);
    setCategory(true);
  };
  const clickProduct = () => {
    setCategory(false);
    setProduct(true);
  };
  return (
    <div className="flex">
      <div className="w-[10vw] h-[95vh] border-r border-slate-100 shadow-2xl flex flex-col ">
        <div className="h-[85vh]  m-auto">
          <div className="flex  m-auto pt-3 pl-2 bg-[rgb(0,0,128)] text-white h-12 w-32 rounded-md mt-2">
            <DashboardCustomizeIcon />
            DashBoard
          </div>
          <div
            className="flex   m-auto pt-3 pl-2 bg-[rgb(0,0,128)] text-white h-12 w-32 rounded-md mt-3"
            onClick={clickProduct}
          >
            <BusinessCenterIcon />
            Products
          </div>
          <div
            className="flex  m-auto pt-3 bg-[rgb(0,0,128)] pl-2 text-white h-12 w-32 rounded-md mt-3"
            onClick={clickCategory}
          >
            <CategoryIcon />
            Categories
          </div>
        </div>
      </div>

      <div>{product ? <Products /> : ""}</div>
      <div>{category ? <Categories /> : ""}</div>
    </div>
  );
}

export default DashBoard;
