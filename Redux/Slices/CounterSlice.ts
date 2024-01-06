import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
  value: number,
}

const initialState: initialStateProps = {
  value: 10,
};

const CounterSlice = createSlice({
  name: "COUNTER",
  initialState,
  reducers: {
    increment: (state) => {
      
    },
    decrement: (state) => {

    },
    reset: () => {
      return initialState;
    },
  },
});

export const { increment, decrement, reset } =
  CounterSlice.actions;

export default CounterSlice.reducer;
