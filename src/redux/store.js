import { configureStore } from "@reduxjs/toolkit";
import addToCart from "./addToCart";
import addToHeart from "./addToHeart";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    addToCart,
    addToHeart,
    cartSlice,
  },
});
