"use client";

import {useSelector} from 'react-redux'

const Counter = () => {
// const count = useSelector((state) => state.counter.value)
  return (
    <main className="w-full h-screen bg-black text-white">
      <div className="text-center py-[10rem] flex items-center gap-8 justify-center">
        <button className="border px-3 py-2 rounded-md hover:bg-white/20">
          Increment
        </button>
        {/* <span>{count}</span> */}
        <button className="border px-3 py-2 rounded-md hover:bg-white/20">
          Decrement
        </button>
        <button className="border px-3 py-2 rounded-md hover:bg-white/20">
          Reset
        </button>
      </div>
    </main>
  );
};

export default Counter;
