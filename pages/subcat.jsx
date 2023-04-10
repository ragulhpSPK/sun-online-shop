import React from "react";
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function Subcat() {
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };

  const items = [
    getItem("Games", "sub1", <MailOutlined />, [
      getItem(
        "Item 1",
        "g1",
        null,
        [getItem("Option 1", "1"), getItem("Option 2", "2")],
        "group"
      ),
      getItem(
        "Item 2",
        "g2",
        null,
        [getItem("Option 3", "3"), getItem("Option 4", "4")],
        "group"
      ),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),
    {
      type: "divider",
    },
    getItem("Navigation Three", "sub4", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ];

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div className="w-[100vw] flex">
      <div className="shadow-lg w-[20vw] ">
        <div className="flex  w-[20vw] m-auto pl-20 pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <p className="border-b w-[100%] ">All categories</p>
        </div>

        <div className="text-justufy pl-20 py-4">
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="h-[35vh] w-[14vw] shadow-lg mt-20 ml-5 border-2 relative">
          <div className="h-[25vh] pt-10">
            <img src="/assets/joystick.png" className="w-auto p-5" />
          </div>
          <p className="text-center">PlayStation Joystick EC234</p>
          <p className="text-center">Rs:800</p>
          <p className="flex flex-col bg-[gold] w-14 h-10 text-center absolute top-0 right-0 text-sm">
            <span>12%</span>OFF
          </p>
        </div>

        <div className="h-[35vh] w-[14vw] shadow-lg mt-20 ml-5 border-2 relative">
          <div className="h-[25vh] pt-10">
            <img src="/assets/joystick.png" className="w-auto p-5" />
          </div>
          <p className="text-center">PlayStation Joystick EC234</p>
          <p className="text-center">Rs:800</p>
          <p className="flex flex-col bg-[gold] w-14 h-10 text-center absolute top-0 right-0 text-sm">
            <span>12%</span>OFF
          </p>
        </div>

        <div className="h-[35vh] w-[14vw] shadow-lg mt-20 ml-5 border-2 relative">
          <div className="h-[25vh] pt-10">
            <img src="/assets/joystick.png" className="w-auto p-5" />
          </div>
          <p className="text-center">PlayStation Joystick EC234</p>
          <p className="text-center">Rs:800</p>
          <p className="flex flex-col bg-[gold] w-14 h-10 text-center absolute top-0 right-0 text-sm">
            <span>12%</span>OFF
          </p>
        </div>

        <div className="h-[35vh] w-[14vw] shadow-lg mt-20 ml-5 border-2 relative">
          <div className="h-[25vh] pt-10">
            <img src="/assets/joystick.png" className="w-auto p-5" />
          </div>
          <p className="text-center">PlayStation Joystick EC234</p>
          <p className="text-center">Rs:800</p>
          <p className="flex flex-col bg-[gold] w-14 h-10 text-center absolute top-0 right-0 text-sm">
            <span>12%</span>OFF
          </p>
        </div>

        <div className="h-[35vh] w-[14vw] shadow-lg mt-20 ml-5 border-2 relative">
          <div className="h-[25vh] pt-10">
            <img src="/assets/joystick.png" className="w-auto p-5" />
          </div>
          <p className="text-center">PlayStation Joystick EC234</p>
          <p className="text-center">Rs:800</p>
          <p className="flex flex-col bg-[gold] w-14 h-10 text-center absolute top-0 right-0 text-sm">
            <span>12%</span>OFF
          </p>
        </div>

        <div className="h-[35vh] w-[14vw] shadow-lg mt-20 ml-5 border-2 relative">
          <div className="h-[25vh] pt-10">
            <img src="/assets/joystick.png" className="w-auto p-5" />
          </div>
          <p className="text-center">PlayStation Joystick EC234</p>
          <p className="text-center">Rs:800</p>
          <p className="flex flex-col bg-[gold] w-14 h-10 text-center absolute top-0 right-0 text-sm">
            <span>12%</span>OFF
          </p>
        </div>

        <div className="h-[35vh] w-[14vw] shadow-lg mt-20 ml-5 border-2 relative">
          <div className="h-[25vh] pt-10">
            <img src="/assets/joystick.png" className="w-auto p-5" />
          </div>
          <p className="text-center">PlayStation Joystick EC234</p>
          <p className="text-center">Rs:800</p>
          <p className="flex flex-col bg-[gold] w-14 h-10 text-center absolute top-0 right-0 text-sm">
            <span>12%</span>OFF
          </p>
        </div>

        <div className="h-[35vh] w-[14vw] shadow-lg mt-20 ml-5 border-2 relative">
          <div className="h-[25vh] pt-10">
            <img src="/assets/joystick.png" className="w-auto p-5" />
          </div>
          <p className="text-center">PlayStation Joystick EC234</p>
          <p className="text-center">Rs:800</p>
          <p className="flex flex-col bg-[gold] w-14 h-10 text-center absolute top-0 right-0 text-sm">
            <span>12%</span>OFF
          </p>
        </div>
      </div>
    </div>
  );
}

export default Subcat;
