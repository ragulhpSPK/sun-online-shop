import React from "react";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import styles from "../styles/form.module.css";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const [check, setCheck] = useState(false);
  const [Qty, setQty] = useState(1);
  const [price, setPrice] = useState([]);
  const router = useRouter();

  const cart = useSelector((state) => state.cart);

  const minus = () => {
    if (Qty == 1) setQty(1);
    else setQty(Qty - 1);
  };

  const plus = () => {
    if (Qty == 5) setQty(5);
    else setQty(Qty + 1);
  };

  return (
    <div className="flex relative">
      <div className="flex">
        <div className="pt-10">
          <div className="overflow-x-auto w-[70vw]">
            {cart.products.map((res) => {
              return res.result.map((data) => {
                return (
                  <table
                    className={`table w-[60vw] border m-auto  mt-10
						}`}
                    key={data.id}
                  >
                    {/* head */}

                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="border-r">
                          <img src={data.image[0]} className="w-20" />
                        </td>

                        <td className="border-r">{data.producttitle}</td>
                        <td className="border-r">
                          <div className="flex justify-center items-center">
                            <button
                              className="text-black text-3xl w-10 bg-[#fcf9f998] shadow-xl border"
                              onClick={minus}
                            >
                              -
                            </button>
                            <span className="px-2">Qty:{Qty}</span>
                            <button
                              className="text-black text-3xl w-10 bg-[#fcf9f998] shadow-xl border"
                              onClick={plus}
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <td className="border-r">Rs:{data.price}</td>
                      </tr>
                      {/* row 2 */}{" "}
                    </tbody>
                  </table>
                );
              });
            })}
          </div>
        </div>
        <div
          className={`mt-14 w-[20vw] h-[40vh] text-white ${
            check ? "hidden" : "block"
          }`}
        >
          <div className=" bg-black/90 h-[100%] text-xl pl-5 flex flex-col justify-evenly">
            <p>Total Price:{Qty}</p>
            <p>Total Discount:0</p>
            <p>Total Quantity:{cart.products.length}</p>

            <button
              className="bg-[var(--third-color)] w-[10vw] h-[5vh] rounded-sm text-black font-medium"
              onClick={() => setCheck(true)}
            >
              Cash On Delivery
            </button>
          </div>
        </div>

        <div
          className={`min-h-[50vh] w-[25vw] absolute right-10 top-10 shadow-2xl pl-10 ${
            check ? "block" : "hidden"
          }`}
        >
          <section className={styles.section_form}>
            <form
              id={styles.consultation_form}
              className={styles.feed_form}
              action="#"
            >
              <h1 className="text-2xl py-3">Enter Your Delivery Location</h1>
              <input required="" placeholder="Name" type="text" />
              <input name="phone" required="" placeholder="Phone number 1" />
              <input name="phone" required="" placeholder="Phone number 2" />
              <textarea
                name="message"
                required=""
                placeholder="Address"
                type="email"
                rows={10}
                cols={7}
              />
              <button className={styles.button_submit}>CheckOut</button>
              <CloseOutlined
                className="text-black absolute top-0 right-0 pr-2"
                color=""
                onClick={() => setCheck(false)}
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cart;
