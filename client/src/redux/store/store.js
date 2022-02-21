import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/userSlices";
import cartsReducer from "../slices/carts/cartSlice";

const store = configureStore({
  reducer: { usersReducer, cartsReducer },
});

export default store;
