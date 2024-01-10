// 'use client'

import { useAppSelector } from "@/Redux/Store";
import Catalogues from "@/components/Catalogues";
import doe from "@/public/doe.jpg";
import mark from "@/public/mark.jpg";
import shelve from "@/public/shelve.jpg";
import zeke from "@/public/zeke.jpg";
import { useSelector } from "react-redux";

const TypeShop = () => {

  const data = useAppSelector((state) => state.catalogue.catalogueCart)

  return (
    <div className="px-3 text-white">
      <div>STORE</div>

      <div>
        <div>
          <div className="flex justify-evenly gap-3 items-center flex-wrap mb-5">
            {data.map((item) => (
              <Catalogues {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeShop;
{
  /* {['doe','mark','shelve','zeke'].map((path, i) => { */
}
{
  /* <div key={i}> */
}
{
  /* </div> */
}
{
  /* }) } */
}
