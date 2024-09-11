import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goItApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeaders = (token) => {
  goItApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await goItApi.post("/users/signup", formData);
      setAuthHeaders(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const { data } = await goItApi.post("/users/login", formData);
      setAuthHeaders(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const globalState = thunkAPI.getState(); // отримуємо доступ до глобального стейту в додатку
      const token = globalState.auth.token;
      setAuthHeaders(token);
      const { data } = await goItApi.get("/users/current");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;

      if (token) return true;

      return false;
    },
  }
);

export const apiLogout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await goItApi.post("/users/logout");
      setAuthHeaders("");

      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
