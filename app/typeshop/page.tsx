// 'use client'

import Catalogues from "@/components/Catalogues";
import ShoppingMenu from "@/components/ShoppingMenu";

const TypeShop = () => {
  return (
    <div className="px-3 text-white relative">
      <div>STORE</div>
      <ShoppingMenu />

      <div>
        <div>
          <Catalogues />
        </div>
      </div>
    </div>
  );
};

export default TypeShop;
// {
//   /* {['doe','mark','shelve','zeke'].map((path, i) => { */
// }
// {
//   /* <div key={i}> */
// }
// {
//   /* </div> */
// }
// {
//   /* }) } */
// }
