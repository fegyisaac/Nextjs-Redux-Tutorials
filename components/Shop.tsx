"use client";

import React from "react";

const Shop = () => {
  const data = [
    {
      id: 1,
      title: "Samsung Galaxy A51",
      price: "350",
      image_url: "https://procell.pe/wp-content/uploads/2020/10/a51.png",
    },
    {
      id: 2,
      title: "Samsung Galaxy A12",
      price: "150",
      image_url:
        "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
    },
    {
      id: 3,
      title: "Samsung Galaxy S21",
      price: "450",
      image_url:
        "https://kontakt.az/wp-content/uploads/2022/01/Samsung-Galaxy-S21FE-5G-6128GB-SM-G990-Gray.png",
    },
  ];

  return (
    <div className="flex justify-between gap-4">
      {data.map((item, i) => (
        <div key={i} className="w-full bg-slate-700 rounded-md p-[1rem]">
          <img className="w-[70%] min-h-[220px] mx-auto" src={item.image_url} alt="img" />
          <div className="py-4 text-white flex justify-between ">
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
          <button
            className="bg-blue-700 w-full text-center mt-5 py-2 hover:bg-blue-800
          rounded-md"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
