"use client";

import { configureStore } from "@reduxjs/toolkit";
import CounterReducers from "./Slices/CounterSlice";
import CatalogueReducer from "./Slices/CatalogueSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import ShoppingReducers from "./Slices/ShoppingSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducers,
    shop: ShoppingReducers,
    catalogue: CatalogueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
