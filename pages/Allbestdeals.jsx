import React from "react";
import { BestDeals } from "@/helper/bestDeals";

function Allbestdeals() {
  return (
    <div className="w-[80vw] m-auto">
      <div className="bg-[url('/assets/purple3.jpg')] bg-left h-[40vh] w-[80vw] m-auto bg-[cover]">
        <div className=" flex justify-center items-center pt-10">
          <h1 className="text-6xl text-white w-[400px] pl-10">
            Daily Best Deals
          </h1>
          <img src="/assets/bestdeals.png" className="w-[500px] h-[250px] " />
          <p className="text-5xl text-white w-[300px]">Upto 50% Offers</p>
        </div>
        <p className="text-2xl text-white w-[80vw] text-center m-auto">
          Unbeatable daily deals on top-rated products,with discounts upto 50%
          offer
        </p>
      </div>

      <div className="flex items-center justify-center pt-10">
        <div className="grid grid-cols-5 gap-24 ">
          {BestDeals.map((data) => {
            return (
              <div
                className="relative   w-[13vw] h-[30vh] border bg-[#fff] border-gray-200 m-auto shadow-lg"
                key={data.id}
              >
                <img src={data.image} className="h-[220px] pt-10 m-auto" />
                <p className="bg-[--fifth-color] w-14 h-10 absolute top-0 right-0  flex flex-col text-sm text-center">
                  <span>{data.offer[0]}</span>
                  {data.offer[1]}
                </p>
                <p className="text-center">{data.name}</p>
                <p className="text-center">Rs:{data.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Allbestdeals;
