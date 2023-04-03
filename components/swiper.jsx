import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "../styles/navbar.module.css";
import { SwipperProducts } from "@/helper/swiper";

export default function App() {
  SwipperProducts.map((data) => {
    console.log(data);
  });
  return (
    <div className="h-[500px]">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="myswiper h-[100%] w-screen"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide
          className="flex flex-row w-screen  opacity-90 bg-[url('/assets/bg-6.webp')]"
          id={styles.wrapper_3}
        >
          <img
            src="/assets/products7.png"
            alt="Image"
            className="float-right pr-56 pt-20 lg:h-[400px] lg:w-[750px]"
          ></img>
          <p
            className="text-5xl w-[60vw] p-40 text-slate-800"
            id={styles.typewritter}
          >
            Get unbeatable prices on the latest electronic devices by
            <span className="text-red-400" id={styles.letter}>
              shopping online!
            </span>
          </p>
        </SwiperSlide>
        <SwiperSlide id={styles.wrapper_2}>
          <img
            src="/assets/headphone3.png"
            alt="Image"
            className=" m-auto float-right pr-40 h-[500px] w-[650px]"
          />
          <div className="m-auto w-[50vw] pt-20">
            <p className="text-7xl pt-5">
              Bo<span className="text-[red]">a</span>t Rockers 370
            </p>
            <p className="text-4xl pt-5">Upto 30% Offer</p>
            <p className="text-4xl pt-5">Don't Miss It</p>
            <p className="text-3xl pt-5 text-slate-800 w-[50vw]">
              Get lost in the music and find your perfect purchase with Boat
              headsets
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id={styles.wrapper_1}>
          <img
            src="/assets/tv-2 (1).png"
            alt="Image"
            className="float-left pl-32 h-[500px] w-[800px]"
          />
          <div className="w-[80vw] p-10">
            <p className="text-8xl  font-light">
              <span className="text-9xl">T</span>v
            </p>
            <p className="text-5xl w-[90vw]" id={styles.text}>
              <span className="text-7xl">S</span>pecial &nbsp;
              <span className="text-7xl">S</span>ale
            </p>
            <p className="text-5xl pt-10">
              <span>U</span>pto 20% <span>O</span>ffer
            </p>

            <p className="text-3xl w-[90vw] pt-10 text-slate-600">
              Shop the latest TV models and enjoy the ultimate home viewing
              experience!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
