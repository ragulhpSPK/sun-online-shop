import React from "react";
import { delivery } from "@/helper/delivery";
import styles from "../styles/Home.module.css";

function Delivery() {
  
  return (
    <div
      className="flex justify-evenly mt-14  pt-[3vh] w-[90vw] m-auto  text-black "
      id={styles.shadow}
    >
      {delivery.map(data=>{
    return(
      <div className="w-40 m-auto ">
        <div className="pl-5">
        <div className={`w-[30%] h-10 flex items-center justify-center  border rounded-2xl hover:scale-125 duration-1000`}>
       <img src={data.image} alt="Icons" className="w-12"/>
      </div>
          </div>
          
   
      <div className="pl-3 pt-1 lg:text-[15px] xsm:text-[8px] h-14">
        <p>{data.desc}</p>
      
      </div>
    </div>
    )
  })}
    
      {/* <div>
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
      <div>
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
      <div>
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
      </div> */}
    </div>
  );
}

export default Delivery;
