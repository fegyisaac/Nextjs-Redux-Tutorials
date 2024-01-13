"use client";

import { useAppSelector } from "@/Redux/Store";
import { CartIcon } from "@/features/icons";
import Link from "next/link";
import ShoppingMenu from "./ShoppingMenu";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/Redux/Slices/ModalSlice";

const Header = () => {
  const { amount } = useAppSelector((state) => state.catalogue);
  const dispatch = useDispatch();
  return (
    <div className="px-10 mt-4 flex justify-between items-center">
      <ul className="right-0 left-0 top-[3rem] text-red-600 flex items-center justify-center gap-[2rem]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/shopping">Shopping</Link>
        </li>
        <li>
          <Link href="/typeshop">Typeshop</Link>
        </li>
      </ul>
      <div className="relative text-blue-500">
        <button onClick={() => dispatch(toggleModal())}>
          <CartIcon />
          <span className="absolute -right-1 -top-1 text-black bg-pink-400 px-1 rounded-full">
            {amount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
