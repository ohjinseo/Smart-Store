import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../../utils/baseURL";
import { emptyCartAction } from "../carts/cartSlice";

export const registerOrderAction = createAsyncThunk(
  "order/register",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    // payload.data.billing_details.address
    // payload.data.amount
    // cart
    const token = getState()?.usersReducer?.userAuth?.token;

    const config = {
      headers: {
        token: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `${baseURL}/orders/`,
      {
        products: getState()?.cartsReducer?.cart?.products,
        price: payload?.data?.amount,
        address: payload?.data?.billing_details?.address,
      },
      config
    );

    dispatch(emptyCartAction());
    console.log(data);

    try {
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const orderSlices = createSlice({
  name: "orders",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(registerOrderAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(registerOrderAction.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(registerOrderAction.pending, (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    });
  },
});

export default orderSlices.reducer;
