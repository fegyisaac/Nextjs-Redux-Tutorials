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
    },

    clearCart: (state) => {
      state.catalogueCartItem = [];
      state.amount = 0;
    },
  },
});

export const { addToCart, clearCart } = CatalogueSlice.actions;

export default CatalogueSlice.reducer;
