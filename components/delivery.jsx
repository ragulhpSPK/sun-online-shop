import React from "react";
// import { delivery } from "@/helper/delivery";
import styles from "../styles/Home.module.css";

function Delivery() {
  return (
    <div
      className="flex justify-evenly mt-14  h-[14vh] w-[90vw] m-auto  text-black "
      id={styles.shadow}
    >
      <div className="flex items-center">
        <div>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:w-10 lg:h-12 xsm:h-6 xsm:w-6 text-[#82237c] hover:scale-110 duration-1000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </p>
        </div>
        <div className="pl-3 lg:text-xl xsm:text-[8px]">
          <p>Free Delivery</p>
          <p>Order above 10000</p>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:w-10 lg:h-12 xsm:h-6 xsm:w-6 text-[#82237c] hover:scale-110 duration-1000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </p>
        </div>
        <div className="pl-3 xsm:text-[8px] lg:text-xl">
          <p>Cash On Delivery</p>
          <p>from Zero</p>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="lg:w-10 lg:h-12 xsm:h-6 xsm:w-6 text-[#82237c] hover:scale-110 duration-1000"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </p>
        </div>
        <div className="pl-3 lg:text-xl xsm:text-[8px]">
          <p>Free Gift Box</p>
          <p>On special Days</p>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:w-10 lg:h-12 xsm:h-6 xsm:w-6 text-[#82237c] hover:scale-110 duration-1000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </p>
        </div>
        <div className="pl-3 lg:text-xl xsm:text-[8px]">
          <p>Best Services</p>
          <p>Some Free Services</p>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
