import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CheckoutProducts, Products } from "../types";

export interface BasketState {
  items: CheckoutProducts[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Actions
    addToBasket: (state, action: PayloadAction<CheckoutProducts>) => {
      state.items = [...state.items, action.payload];
    },

    removeFromBasket: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as it is not in the basket.`
        );
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors
export const selectItems = (state: RootState) => state.basket.items;
export const selectTotal = (state: RootState) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
