import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Products } from "../types";

export interface BasketState {
  items: Products[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Actions
    addToBasket: (state, action: PayloadAction<Products>) => {
      state.items = [...state.items, action.payload];
    },

    removeFromBasket: (state, action: PayloadAction<number>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors
export const selectItems = (state: RootState) => state.basket.items;

export default basketSlice.reducer;
