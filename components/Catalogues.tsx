'use client'

import CunrrencyFormatter from "@/utilities/CunrrencyFormatter";
import Image, { StaticImageData } from "next/image";
import CartActions from "./CartActions";
import { useAppSelector } from "@/Redux/Store";

// type CatalogueProps = {
//   id: number;
//   name: string;
//   image: StaticImageData;
//   price: number;
// };

const Catalogues = () => {


  const data = useAppSelector(state => state.catalogue.catalogueCart);

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
              {CunrrencyFormatter(item.price)}
            </span>
          </div>
          <CartActions />
        </div>
      ))}
  </div>
  );
};

export default Catalogues;
