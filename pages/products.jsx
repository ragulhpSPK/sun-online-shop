import React from "react";
import { ProductsList } from "../helper/products";
import styles from "../styles/Home.module.css";

function AllProducts() {
  return (
    <div className="h-screen">
      <div className="h-fit grid w-screen xsm:pl-10 lg:pl-40 xsm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-5  pt-10">
        {ProductsList.map((data) => {
          return (
            <div
              className="card w-[250px] h-[280px]  p-5 mt-12 bg-[#fff]"
              key={data.id}
              id={styles.shadow3}
            >
              <figure>
                <img src={data.image} alt="products" className="h-[120px]" />
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
