"use client";

import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
  value: number;
};

const initialState: initialStateProps = {
  value: 10,
};

const CounterSlice = createSlice({
  name: "COUNTER",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state, actions) => {
      state.value += actions.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { increment, decrement, reset } = CounterSlice.actions;

export default CounterSlice.reducer;
