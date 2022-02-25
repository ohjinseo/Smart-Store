import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../utils/baseURL";

export const getProductsAction = createAsyncThunk(
  "product/getAllProducts",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(`${baseURL}/products`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const registerProductAction = createAsyncThunk(
  "product/registerProduct",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const token = getState()?.usersReducer?.userAuth?.token;

    const config = {
      headers: {
        token: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios.post(`${baseURL}/products`, payload, config);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const productSlices = createSlice({
  name: "products",
  initialState: {},
  extraReducers: (builder) => {
    //get 상품
    builder.addCase(getProductsAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getProductsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action?.payload;
    });

    builder.addCase(getProductsAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    });

    // 상품 추가
    builder.addCase(registerProductAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(registerProductAction.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action?.payload;
    });

    builder.addCase(registerProductAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    });
  },
});

export default productSlices.reducer;
