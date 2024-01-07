"use client";

import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
  shoppingCart: {
    id: number;
    title: string;
    price: string;
    image_url: string;
  }[];

  data: {
    id: number;
    title: string;
    price: string;
    image_url: string;
  }[];
};

const initialState: initialStateProps = {
  shoppingCart: [],
  data: [
    {
      id: 1,
      title: "Samsung Galaxy A51",
      price: "10",
      image_url: "https://procell.pe/wp-content/uploads/2020/10/a51.png",
    },
    {
      id: 2,
      title: "Samsung Galaxy A12",
      price: "50",
      image_url: "https://procell.pe/wp-content/uploads/2020/10/a51.png",
    },
    {
      id: 3,
      title: "Samsung Galaxy S21",
      price: "100",
      image_url: "https://procell.pe/wp-content/uploads/2020/10/a51.png",
    },
  ],
};

const ShoppingSlice = createSlice({
  name: "SHOP",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.shoppingCart.push(action.payload);
    },
    removeCard: (state, action) => {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addCart, removeCard } = ShoppingSlice.actions;

export default ShoppingSlice.reducer;
