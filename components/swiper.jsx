import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css/autoplay'





export default function App() {

  return (
    <div className="bg-[red] ">
      <Swiper navigation={true} modules={[Navigation,Autoplay]} classNam="myswiper" Autoplay={true}  pagination={{ clickable: true }}
      scrollbar={{ draggable: true }} autoplay={{delay:5000}}>
        <SwiperSlide className="flex w-[100vw]"><img src="/assets/tv.png" style={{height:"300px",width:"400px"}}></img>
        <h1 className="absolute top-20 left-[40vw]">Upto 60 % offer<br/>Dont Miss It</h1>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
