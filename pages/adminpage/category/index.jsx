import React from "react";
import Sidenavbar from "../Sidenavbar";
import Categories from "./categories";
import { Tabs } from "antd";
import Subcategories from "./subcategories";

const CategoryHome = () => {
  const items = [
    {
      key: "1",
      label: `Tab 1`,
      children: <Categories />,
    },
    {
      key: "2",
      label: `Tab 2`,
      children: <Subcategories />,
    },
    {
      key: "3",
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <div className="flex">
      <div>
        <Sidenavbar />
      </div>
      <div>
        <Tabs items={items} />
      </div>
    </div>
  );
};

export default CategoryHome;
