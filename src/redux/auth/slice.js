import { createSlice } from "@reduxjs/toolkit";

import {
  registerUserThunk,
  loginUserThunk,
  logoutUserThunk,
} from "./operations";

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
        console.log("suss");
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.payload;
        console.log("not log");
      })
      .addCase(logoutUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = slice.reducer;
