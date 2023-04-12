import { useState, useRef } from "react";
import React from "react";
import styles from "../../styles/zoom.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";
import { useRouter } from "next/router";
import { AddCart } from "@/helper/Addcart";

export default function App() {
  const [addcart, setAddCart] = useState();
  const router = useRouter();
  const images = [
    "/assets/redmi1.jpg",
    "/assets/redmi2.jpg",
    "/assets/redmi3.jpg",
    "/assets/redmi4.jpg",
    "/assets/redmi5.jpg",
  ];

  const [img, setImg] = useState(images[0]);

  const hoverhandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };

  const refs = useRef([]);
  refs.current = [];

  const addref = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const result = AddCart.filter((data) => {
    return data.product_id == router.query.id;
  });

  return (
    <div className="h-[100vh] flex justify-evenly">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={`${styles.left_2} pl-24`}>
            {/* <ReactImageMagnify {...{
								    smallImage:{
								        alt:'not',
								        isFluidWidth:true,
								        src:img,
								    },
								    largeImage:{
								        src:img,
								        width:1200,
								        height:1800,
                        
								    }    
								}}
							className={
								styles.img
							}/> */}
            <img src={img} alt="product" className="h-[60vh]" />
          </div>
          <div className={styles.left_1}>
            {images.map((image, i) => {
              return (
                <div
                  className={i === 0 ? "border-4" : "border-none"}
                  id={styles.img_wrap}
                  key={i}
                  onClick={() => hoverhandler(image, i)}
                  ref={addref}
                >
                  <img src={image} alt="not found" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {result.map((data) => {
        return (
          <div className="pt-32 w-[60vw]">
            <h1 className="text-2xl font-semibold">{data.producttitle}</h1>
            <p className="text-xl text-slate-800 pt-1">Rs:{data.price}</p>
            <h2 className="text-xl pt-5">Product Specifications</h2>
            {data.highlights.map((res) => {
              return <li className="text-xl pt-1">{res}</li>;
            })}

            <div className="pt-10 flex justify-between w-[15vw]">
              <button className="bg-[var(--second-color)] text-[#fff] text-2xl rounded-md px-3 h-12 py-2">
                Add to Cart
              </button>
              <button className="bg-[var(--second-color)] text-[#fff] text-2xl rounded-md h-12 px-3 py-2">
                Buy Now
              </button>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}
