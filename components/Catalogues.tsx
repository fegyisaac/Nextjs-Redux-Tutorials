"use client";

import Image from "next/image";
import { useAppSelector } from "@/Redux/Store";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux/Slices/CatalogueSlice";
import { FormatCurrency } from "@/utilities/FormatCurrency";

const Catalogues = () => {
  const data = useAppSelector((state) => state.catalogue.catalogueCart);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-evenly gap-3 items-center flex-wrap mb-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="px-6 pt-5 pb-4 bg-green-800 shadow-md rounded-md"
        >
          <div className="h-[200px] w-[200px] object-cover">
            <Image src={item.image} alt={item.name} className="w-full h-full" />
          </div>
          <div className="flex justify-between items-center my-3 ">
            <span className="text-base font-medium">{item.name}</span>
            <span className="ml-3 text-slate-400">
              {FormatCurrency(item.price)}
            </span>
          </div>
          <button
            className="bg-green-500 w-full py-1 rounded-md"
            onClick={() => dispatch(addToCart(item))}
          >
            + Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Catalogues;
