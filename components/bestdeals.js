import { BestDeals } from "@/helper/bestDeals";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { flashdeals } from "@/helper/flashdeals";
import styles from "../styles/Home.module.css";

function Bestdeals() {
  return (
    <div>
      <div className=" bg-[red] h-[50vh] w-[90vw] m-auto flex">
        <div className="flex flex-col border-8 border-[blue] h-[49vh] w-[89.5vw] m-auto rounded-md">
          <div className="flex justify-between px-1 bg-[blue]  h-[20vh]">
            <div className="flex flex-col justify-around">
              <img src="/assets/deals.png" className="w-28 h-14" />
              <p className="text-white text-2xl">Best Deals today</p>
            </div>
            <div>
              <h1 className="text-5xl text-white pt-2">Limited Time Sales</h1>
            </div>
            <div className="flex flex-col justify-around">
              <img src="/assets/deals2.png" className="w-16 h-14" />
              <Link href="/Allbestdeals">
                <p className="text-white">See More &#8594;</p>
              </Link>
            </div>
          </div>
          <div className="flex">
            {BestDeals.slice(0, 5).map((data) => {
              return (
                <div
                  className="relative   w-[18vw] h-[30vh] border-r-2 bg-[#fff] border-gray-400"
                  key={data.id}
                >
                  <img src={data.image} className="h-[220px] pt-10 pl-10" />
                  <p className="bg-[gold] w-14 h-10 absolute top-0 right-0 skew-[20px] flex flex-col text-sm text-center">
                    <span>{data.offer[0]}</span>
                    {data.offer[1]}
                  </p>
                  <p className="text-center">{data.name}</p>
                  <p className="text-center">Rs:{data.price}</p>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>

      {/* Flash Deals */}

      <div className="h-[40vh]  mt-14 w-[90vw] m-auto " id={styles.shadow2}>
        <div className="pt-5 ">
          <div className="flex w-[90vw] justify-between m-auto px-5">
            <p className="text-[blue] text-3xl">Flash Deals</p>
            <Link href="flashDeals">
              <p className="text-[blue]">See All &#8594;</p>
            </Link>
          </div>
        </div>
        <div className="pt-5 ">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: false,
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            className="mySwiper w-[85vw] "
          >
            {flashdeals.map((data) => {
              return (
                <SwiperSlide className="relative w-[10vw] border-2 ">
                  <img src={data.image} className="w-48" />
                  <p className="flex flex-col bg-[gold] w-14 text-center absolute top-0 right-0">
                    <span>{data.offer}</span>
                    OFF
                  </p>
                  <p className="text-xl text-center">Rs:{data.price}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Bestdeals;
