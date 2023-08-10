import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { addProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
