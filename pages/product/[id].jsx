import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className="h-[100vh] flex justify-evenly">
      <div className="h-[100vh] pt-32">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="w-[30vw] h-[50vh] float-left text-center m-auto"
        >
          <SwiperSlide>
            <img src="/assets/redmi.webp" className="w-[60%]   m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/redmi.webp" className="w-[60%]   m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/redmi.webp" className="w-[60%]   m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/redmi.webp" className="w-[60%]   m-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pt-40">
        <h1 className="text-3xl font-semibold">
          REDMI Note 12 Pro 5G (Onyx Black, 128 GB) (6 GB RAM)
        </h1>
        <p className="text-2xl text-slate-800 pt-1">Rs:25999</p>
        <h2 className="text-2xl pt-5">Product Specifications</h2>
        <li className="text-2xl pt-1">8 GB RAM | 128 GB ROM</li>
        <li className="text-2xl pt-1">16.94 cm (6.67 inch) Full HD Display</li>
        <li className="text-2xl pt-1">
          50MP (OIS) + 8MP + 2MP | 16MP Front Camera
        </li>
        <li className="text-2xl pt-1">5000 mAh Lithium Polymer Battery</li>
        <li className="text-2xl pt-1">Mediatek Dimensity 1080 Processor</li>
        <div className="pt-10 flex justify-between w-[15vw]">
          <button className="bg-[#82237c] text-[#fff] text-2xl rounded-md px-3 py-2">
            Add to Cart
          </button>
          <button className="bg-[#82237c] text-[#fff] text-2xl rounded-md px-3 py-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
