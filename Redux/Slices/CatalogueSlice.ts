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
  catalogueCartItem: {
    id: number;
    image: StaticImageData;
    name: string;
    price: number;
    cartQuantity: number;
  }[];
};

const initialState: initialStateProps = {
  quantity: 0,
  catalogueCart: data,
  catalogueCartItem: [],
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

      const itemIndex = state.catalogueCartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.catalogueCartItem[itemIndex].cartQuantity += 1;
      } else {
        const productCount = { ...action.payload, cartQuantity: 1 };
        state.catalogueCartItem.push(productCount);
      }
    },
  },
  // extraReducers:
});

export const {
  //  addCart, removeCard
  addToCart,
} = CatalogueSlice.actions;

export default CatalogueSlice.reducer;
