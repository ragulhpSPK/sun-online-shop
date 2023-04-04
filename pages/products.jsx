import React from "react";
import { ProductsList } from "../helper/products";

function AllProducts() {
  return (
    <div className="h-screen">
      <div className="h-fit grid w-screen xsm:pl-10 lg:pl-40 xsm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-5  pt-10">
        {ProductsList.map((data) => {
          return (
            <div
              className="card w-[250px] h-[300px] bg-base-100 shadow-lg p-5 mt-12"
              key={data.id}
            >
              <figure>
                <img src={data.image} alt="Shoes" className="h-[150px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.category}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
