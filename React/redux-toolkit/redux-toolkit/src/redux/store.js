import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";
import UserReducer from "./User.Slice";

const appStore = configureStore({
  reducer: {
    product: ProductReducer,
    user: UserReducer,
  },
});

export default appStore;
