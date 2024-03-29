"use client";

import { createSlice } from "@reduxjs/toolkit";
import { data } from "@/components/constant";
import { initialStateProps } from "@/components/types";

const initialState: initialStateProps = {
  amount: 0,
  catalogueCart: data,
  catalogueCartItem: [],
  total: 0,
};

const CatalogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.catalogueCartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.catalogueCartItem[itemIndex].cartQuantity += 1;
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.catalogueCartItem?.push(temp);
        state.amount += 1;
      }

      state.catalogueCartItem.map(item => {
        state.total = item.cartQuantity * item.price
      })
    },
    removeCart: (state, action) => {
      state.catalogueCartItem = state.catalogueCartItem.filter(
        (item) => item.id !== action.payload.id
      );
      state.amount -= 1;

     
    },

    decreaseCartQty: (state, action) => {
      const isExist = state.catalogueCart.find(
        (item) => item.id == action.payload?.id
      );
      const itemIndex = state.catalogueCartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (isExist && state.catalogueCartItem[itemIndex].cartQuantity != 1) {
        state.catalogueCartItem[itemIndex].cartQuantity -= 1;
      } else {
        state.catalogueCartItem = state.catalogueCartItem.filter(
          (item) => item.id !== action.payload.id
        );
        state.amount -= 1;
      }

      state.catalogueCartItem.map(item => {
        state.total = item.cartQuantity * item.price
      })
    },

    clearCart: (state) => {
      state.catalogueCartItem = [];
      state.amount = 0;
    },
  },
});

export const { addToCart, clearCart, removeCart, decreaseCartQty } =
  CatalogueSlice.actions;

export default CatalogueSlice.reducer;
