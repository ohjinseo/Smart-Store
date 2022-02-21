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
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const addProductAction = createAsyncThunk(
  "cart/addProduct",
  // payload : product , count , color , size
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const token = getState()?.usersReducer?.userAuth?.token;

    try {
      const config = {
        headers: {
          token: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        `${baseURL}/carts/${payload.productId}
      ?kind=add&count=${payload.count}`,
        null,
        config
      );

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getUserCartAction = createAsyncThunk(
  "cart/getUserCart",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const token = getState()?.usersReducer?.userAuth?.token;

    try {
      const config = {
        headers: {
          token: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`${baseURL}/carts/`, config);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const cartSlices = createSlice({
  name: "carts",
  initialState: {},
  extraReducers: (builder) => {
    // 카트 생성
    builder.addCase(registerCartAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(registerCartAction.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action?.payload;
    });

    builder.addCase(registerCartAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    });

    // 물건 담기
    builder.addCase(addProductAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(addProductAction.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action?.payload;
      state.total = action?.payload?.products?.length;
    });

    builder.addCase(addProductAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    });

    // 카트 가져오기
    builder.addCase(getUserCartAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getUserCartAction.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action?.payload;
      state.total = action?.payload?.products?.length;
    });

    builder.addCase(getUserCartAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    });
  },
});

export default cartSlices.reducer;
