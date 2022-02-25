import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/productSlice";
import usersReducer from "../slices/userSlice";

const store = configureStore({
  reducer: { productsReducer, usersReducer },
});

export default store;
