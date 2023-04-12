import React from "react";
import Sidenavbar from "../Sidenavbar";
import Categories from "./categories";
import { Tabs } from "antd";
import Subcategories from "./subcategories";

const CategoryHome = () => {
  const items = [
    {
      key: "1",
      label: `Category`,
      children: <Categories />,
    },
    {
      key: "2",
      label: `SubCategory`,
      children: <Subcategories />,
    },
  ];
  return (
    <div className="flex">
      <div>
        <Sidenavbar />
      </div>
      <div className="pl-5">
        <Tabs items={items} />
      </div>
    </div>
  );
};

export default CategoryHome;
