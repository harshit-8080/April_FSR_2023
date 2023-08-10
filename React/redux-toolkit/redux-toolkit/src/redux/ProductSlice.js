import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: {
      name: "Watch",
      price: 1000,
      company: "Titan",
    },
    sells: {
      year: 100,
      month: 20,
    },
  },
  reducers: {
    increasePrice: (state, action) => {
      state.data.price = action.payload;
    },
  },
});

// console.log(ProductSlice);

export const { increasePrice } = ProductSlice.actions;
export default ProductSlice.reducer;
