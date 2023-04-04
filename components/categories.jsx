import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";
import { ProductsList } from "../helper/products";
import Link from "next/link";

function Categories() {
  return (
    <div className="w-screen pt-20 ">
      <div className="flex h-[7vh] bg-[#82237c]  text-white w-[98vw] m-auto rounded-sm">
        <h1 className="lg:pl-14 xsm:text-[12px] lg:text-2xl text-center xsm:pt-5 lg:pt-3">
          Shop By Category
        </h1>
        <p className="text-center m-auto xsm:text-[12px] lg:text-2xl">
          Buy your favourite Products
        </p>
      </div>
      <div className="flex pt-10 xsm:h-[300px]  lg:h-[300px] justify-center items-center xsm:pl-3 ">
        <div className="xsm:h-[80%] lg:h-[100%] lg:w-[10vw]  shadow-xl   text-center pt-28 ">
          <h1 className="lg:text-4xl text-[#82237c]">Electronics</h1>
        </div>
        <div className="lg:pl-[10px] xsm:w-[70vw] lg:w-[80vw]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper h-[100%]  w-[60vw]"
            breakpoints={{
              620: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1020: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {ProductsList.map((res) => {
              return (
                <SwiperSlide
                  key={res.id}
                  className="lg:ml-4 text-center  shadow-2xl py-7 rounded-md"
                >
                  <img
                    src={res.image}
                    className="w-fit xsm:h-[100px] lg:h-[250px] m-auto "
                  />
                  <h1 className="text-2xl text-black">{res.category}</h1>
                  <p className="text-xl text-slate-800">{res.price}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="xsm:w-[5vw] xsm:text-[12px] lg:w-[9vw] lg:text-3xl">
          <Link href="products">
            <button>view all</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
