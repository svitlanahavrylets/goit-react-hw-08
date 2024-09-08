import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
