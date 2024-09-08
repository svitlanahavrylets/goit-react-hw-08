import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const goItApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const { data } = await goItApi.get("/users/login", formData);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  // {
  //   condition: (_, thunkApi) => {
  //     const state = thunkApi.getState();
  //     const token = state.auth.token;

  //     if (token) return true;

  //     return false;
  //   },
  // }
);

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await goItApi.post("/users/signup", formData);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  // {
  //   condition: (_, thunkApi) => {
  //     const state = thunkApi.getState();
  //     const token = state.auth.token;

  //     if (token) return true;

  //     return false;
  //   },
  // }
);
