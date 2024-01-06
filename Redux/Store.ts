import { configureStore } from "@reduxjs/toolkit";
import CounterReducers from "./Slices/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducers,
  },
});
