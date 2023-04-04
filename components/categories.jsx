import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { ProductsList } from "../helper/products";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function Categories() {
  return (
    <div className="w-screen pt-20">
      <div className="w-screen flex justify-center">
        <div className="flex h-[7vh] text-[#82237c] justify-between items-center  w-[90vw]  rounded-sm">
          <h1 className=" text-2xl text-center pt-3 font-semibold">
            Shop By Category
          </h1>
          <Link href="/products">
            <p className="text-center  text-2xl pr-10 pt-5 font-semibold">
              View All
            </p>
          </Link>
        </div>
      </div>

      <div className="flex h-[300px] justify-center items-center">
        <div className=" w-[90vw] h-[20vh]">
          <div>
            <Swiper
              slidesPerView={"4"}
              spaceBetween={30}
              pagination={{
                clickable: false,
              }}
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              className="mySwiper w-[90vw] h-[100%]"
            >
              {ProductsList.map((data) => {
                return (
                  <SwiperSlide className="p-5  border  shadow-xl flex justify-between hover:shadow-gray-500">
                    <div>
                      <img
                        src={data.image}
                        className="h-[100px] float-left hover:scale-110 duration-1000"
                      />
                    </div>

                    <div className="pt-10 pl-5">
                      <h1 className="text-xl w-[50vw] ">{data.category}</h1>
                      <p className="text-xl">{data.items}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
