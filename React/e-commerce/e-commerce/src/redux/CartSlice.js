import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      state.cartList = state.cartList.filter((item) => {
        if (item.title != action.payload.title) {
          return item;
        }
      });
    },
    calculateTotalPrice: (state, action) => {
      state.totalPrice = state.cartList.reduce((total, item) => {
        return (total = total + item.price);
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart, calculateTotalPrice } =
  CartSlice.actions;

export default CartSlice.reducer;
