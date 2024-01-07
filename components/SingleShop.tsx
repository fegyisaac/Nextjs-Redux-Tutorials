"use client";


import { removeCard } from "@/Redux/Slices/ShoppingSlice";
import { useAppSelector } from "@/Redux/Store";
import React from "react";
import { useDispatch } from "react-redux";

const SingleShop = () => {
  const data = useAppSelector((state) => state.shop.shoppingCart);
  
  const dispatch = useDispatch();
 
  return (
    <div className="flex flex-col gap-4 my-4">
      {data.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-slate-700 p-2 rounded-md">
          <div className="flex items-center gap-6">
            <img className="w-[6rem]" src={item.image_url} alt="image" />
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </div>
          <button className="hover:opacity-75 text-[1.5rem]" onClick={() => dispatch(removeCard(item))} >🗑️</button>
        </div>
      ))}
    </div>
  );
};

export default SingleShop;
