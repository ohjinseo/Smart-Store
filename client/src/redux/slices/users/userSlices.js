import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../../utils/baseURL";

//함수 반환 값은 payload로
export const loginUserAction = createAsyncThunk(
  "user/login",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      //make http call
      const { data } = await axios.post(
        `${baseURL}/auth/login`,
        payload,
        config
      );

      //Save user into localstorage
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const registerUserAction = createAsyncThunk(
  "user/register",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      console.log(payload);
      const res = await axios.post(`${baseURL}/auth/register`, payload, config);
      console.log(res);
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      localStorage.removeItem("userInfo");
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Get user from localStorage and place it inside our store
const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : undefined;

const usersSlices = createSlice({
  name: "users",
  initialState: {
    userAuth: userLoginFromStorage,
  },
  extraReducers: (builder) => {
    //LOGIN
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.userLoading = true;
      state.userAppErr = undefined;
      state.userServerErr = undefined;
    });

    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload;
      state.userLoading = false;
      state.userAppErr = undefined;
      state.userServerErr = undefined;
    });

    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.userLoading = false;
      state.userAppErr = action?.payload?.message;
      state.userServerErr = action?.error?.message;
    });

    //REGISTER
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.userLoading = true;
      state.userAppErr = undefined;
      state.userServerErr = undefined;
    });

    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.userLoading = false;
      state.isRegistered = true;
      state.userAppErr = undefined;
      state.userServerErr = undefined;
    });

    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.userLoading = false;
      state.userAppErr = action?.payload?.message;
      state.userServerErr = action?.payload?.error?.message;
    });

    //LOGOUT
    builder.addCase(logout.fulfilled, (state, action) => {
      state.userLoading = false;
      state.userAuth = undefined;
    });
  },
});

export default usersSlices.reducer;
