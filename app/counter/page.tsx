"use client";

import { decrement, increment, reset } from "@/Redux/Slices/CounterSlice";
import { useAppSelector } from "@/Redux/Store";
import { useDispatch } from "react-redux";


const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className="w-full h-screen bg-black text-white">
      <div className="text-center py-[10rem] flex items-center gap-8 justify-center">
        <button className="border px-3 py-2 rounded-md hover:bg-white/20" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button className="border px-3 py-2 rounded-md hover:bg-white/20" onClick={() => dispatch(decrement(20))}>
          Decrement
        </button>
        <button className="border px-3 py-2 rounded-md hover:bg-white/20" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </main>
  );
};

export default Counter;
