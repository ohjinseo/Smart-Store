import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: false,
    errorMessage: "",
  },

  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },

    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = false;
    },

    loginFail: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
