import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helpers/helper";

const initialState = {
  selectedItems: [],
  total: 0,
  itemsCounter: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (i) => i.id == action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    decrease: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (i) => i.id == action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    checkout: (state) => {
      state.checkout = true;
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;
