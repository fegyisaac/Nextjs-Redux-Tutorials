"use client";

import { data } from "@/components/constant";
import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

type initialStateProps = {
  quantity: number;
  catalogueCart: {
    id: number;
    image: StaticImageData;
    name: string;
    price: number;
  }[];
};

const initialState: initialStateProps = {
  quantity: 0,
  catalogueCart: data
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
    addToCart: (state, action) => {
      // state.quantity = state.catalogueCart
    }
  },
  // extraReducers: 
});

export const {
  //  addCart, removeCard
  addToCart
} = CatalogueSlice.actions;

export default CatalogueSlice.reducer;
