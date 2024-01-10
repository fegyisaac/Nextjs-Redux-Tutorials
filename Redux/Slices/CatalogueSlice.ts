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
  ],
}; 

const CatalogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {
    // addCart: (state, action) => {
    //   state.shoppingCart.push(action.payload);
    // },
    // removeCard: (state, action) => {
    //   state.shoppingCart = state.shoppingCart.filter(
    //     (item) => item.id !== action.payload.id
    //   );
    // },
  },
});

export const {
    //  addCart, removeCard
     } = CatalogueSlice.actions;

export default CatalogueSlice.reducer;
