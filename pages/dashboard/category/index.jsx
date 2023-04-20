import React from "react";
import Sidenavbar from "../shared/Sidenavbar";
import Categories from "./categories";
import { Tabs } from "antd";
import Subcategories from "./subcategories";
import AdminNavbar from "../shared/AdminNavbar";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
const { Panel } = Collapse;

const CategoryHome = () => {
  return (
    <div className="flex flex-col">
      <div>
        <AdminNavbar />
      </div>
      <div className="flex flex-row gap-x-5">
        <div>
          <Sidenavbar />
        </div>
        <div className="pt-[5vh] flex items-start gap-x-10 justify-start">
          <Categories />
          <Subcategories />
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;
