import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../../utils/baseURL";

//카트 생성 액션
export const registerCartAction = createAsyncThunk(
  "cart/register",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        token: `Bearer ${payload.token}`,
      },
    };
    try {
      const { data } = await axios.post(`${baseURL}/carts/`, null, config);
      console.log(data);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const addProductAction = createAsyncThunk(
  "cart/addProduct",
  async (payload, { rejectWithValue, getState, dispatch }) => {}
);

const cartSlices = createSlice({
  name: "carts",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(registerCartAction.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export default cartSlices.reducer;
