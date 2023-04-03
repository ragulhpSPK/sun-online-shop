import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";
import { ProductsList } from "../helper/products";

function Categories() {
  return (
    <div className="w-screen pt-20">
      <div className="flex h-[7vh] bg-[#82237c] text-white w-[98vw] m-auto rounded-sm">
        <h1 className="pl-14 text-2xl text-center pt-3">Shop By Category</h1>
        <p className="text-center m-auto text-2xl">
          Buy your favourite Products
        </p>
      </div>
      <div className="flex pt-10  h-[300px] justify-center items-center pl-10">
        <div className="h-[100%] w-[15vw]  shadow-xl  mt-[-30px] text-center pt-28 ">
          <h1 className="text-4xl text-[#82237c]">Electronics</h1>
        </div>
        <div className="pl-[10px] w-[85vw]">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper h-[100%]  w-[65vw]"
          >
            {ProductsList.map((res) => {
              return (
                <SwiperSlide
                  key={res.id}
                  className=" ml-4 text-center shadow-2xl py-7 rounded-md"
                >
                  <img src={res.image} className="w-fit h-[250px] m-auto " />
                  <h1 className="text-2xl text-black">{res.category}</h1>
                  <p className="text-xl text-slate-800">{res.price}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-[10vw] text-3xl">
          <button>view all</button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
