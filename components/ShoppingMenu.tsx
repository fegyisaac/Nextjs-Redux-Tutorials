"use client";
import { addToCart, clearCart } from "@/Redux/Slices/CatalogueSlice";
import { useAppSelector } from "@/Redux/Store";
import { FormatCurrency } from "@/utilities/FormatCurrency";
import Image from "next/image";
import { useDispatch } from "react-redux";

const ShoppingMenu = () => {
  const modal = useAppSelector((state) => state.modal.isOpen);
  let amount = 3;
  const dispatch = useDispatch();

  const data = useAppSelector((state) => state.catalogue.catalogueCartItem);
  return (
    <div>
      {modal ? (
        <div className="bg-green-400 absolute min-w-[280px] right-0 px-3 overflow-scroll overflow-x-hidden top-0 h-[100%]">
          <div className="relative min-h-full">
            {amount < 1 ? (
              <div className="text-center">Your cart is Currently empty</div>
            ) : (
              <div>
                <div className="text-[21px] text-center font-medium py-3">
                  Your Cart Item
                </div>
                <div className="">
                  {data.map((item) => (
                    <div key={item.id} className="mb-4">
                      <div className="flex justify-between gap-5">
                        <div className="h-[85px] w-[70px] object-cover">
                          <Image
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <div>{item.name}</div>
                          <div>{FormatCurrency(item.price)}</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-3 gap-6">
                        <button className="bg-red-600 text-white text-[13px] py-1 px-2 rounded-md">
                          Remove
                        </button>
                        <div>
                          <button className="w-7 h-7 bg-blue-700 rounded-sm">
                            -
                          </button>
                          <span>{` ${item.cartQuantity} in Cart `}</span>
                          <button
                            className="w-7 h-7 bg-blue-700 rounded-sm"
                            onClick={() => dispatch(addToCart(item))}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <footer className="flex flex-col gap-2 absolute bottom-0 w-full my-2 bg-black text-white">
                  <div className="flex justify-between">
                    <h4>Total</h4>
                    <div>{FormatCurrency(2100)}</div>
                  </div>
                  <button
                    onClick={() => dispatch(clearCart())}
                    className="bg-red-600 text-center w-fit mx-auto text-white text-[13px] py-1 px-2 rounded-md"
                  >
                    clear Cart
                  </button>
                </footer>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ShoppingMenu;
