// 'use client'

import { addToCart } from "@/Redux/Slices/CatalogueSlice";
import { useAppSelector } from "@/Redux/Store";
import { useDispatch } from "react-redux";


const CartActions = () => {
  // let quantity = 0;
  const count = useAppSelector((state) => state.catalogue.quantity)
  // const dispatch = useDispatch()

  return (
    <div className="min-h-[50px]">
      <div className="mt-auto">
        {count === 0 ? (
          <button className="bg-green-500 w-full py-1 rounded-md" 
          //  onClick={() => dispatch(addToCart())}
           >
            + Add to Cart
          </button>
        ) : (
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="flex justify-between items-center gap-2">
              <button className="w-7 h-7 bg-blue-700 rounded-sm">-</button>
              <span>{`${count} in Cart`}</span>
              <button className="w-7 h-7 bg-blue-700 rounded-sm"  
              // onClick={() => dispatch(addToCart())}
              >+</button>
            </div>
            <button className="bg-red-600 text-white text-[13px] py-1 px-2 rounded-md">
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartActions;
