"use client";

import { addCart } from "@/Redux/Slices/ShoppingSlice";
import { useAppSelector } from "@/Redux/Store";
import React from "react";
import { useDispatch } from "react-redux";

const Shop = () => {
  const data = useAppSelector((state) => state.shop.data);
  const dispatch = useDispatch();

  const shopList = useAppSelector((state) => state.shop.shoppingCart);
  const itemExist = (id: number) => {
    return shopList.some((item) => item.id === id);
  };
  return (
    <div className="flex justify-between gap-4">
      {data.map((item, i) => (
        <div key={i} className="w-full bg-slate-700 rounded-md p-[1rem]">
          <img
            className="w-[70%] min-h-[220px] mx-auto"
            src={item.image_url}
            alt="img"
          />
          <div className="py-4 text-white flex justify-between ">
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>

          <button
            className={`  bg-blue-700 w-full text-center mt-5 py-2 hover:bg-blue-800
          rounded-md ${itemExist(item.id) && "hidden bg-slate-500"} `}
            onClick={() => dispatch(addCart(item))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
