'use client'
import { useAppSelector } from "@/Redux/Store";
import CunrrencyFormatter from "@/utilities/CunrrencyFormatter";
import Image from "next/image";
// import { useSelector } from "react-redux";

const OneLove = () => {
  // const info = useAppSelector((state) => state.catalogue.catalogueCartItem)
  const data = useAppSelector((state) => state.catalogue.catalogueCartItem);
  // const data = useAppSelector((state) => state.catalogue.catalogueCart);


  return (
    <div className="bg-black p-3">
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
        </div>
      ))}
      {/* {`${data}`} */}
    </div>
  );
};

export default OneLove;
