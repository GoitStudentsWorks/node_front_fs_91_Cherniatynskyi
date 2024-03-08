import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signUp,
  logIn,
  logOut,
  getProfile,
  setToken,
  updateUser,
  updateTheme,
} from 'services/authService';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      return await logIn(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      return await signUp(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await logOut();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProfileThunk = createAsyncThunk(
  'auth/profile',
  async (_, { rejectWithValue }) => {
    try {
      return await getProfile();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return;
    }
    setToken(`Bearer ${token}`);
    try {
      return await getProfile();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updaterUserTheme = createAsyncThunk(
  'auth/theme',
  async (body, { rejectWithValue }) => {
    try {
      return await updateTheme(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updaterUserData = createAsyncThunk(
  'auth/updateUser',
  async (body, { rejectWithValue }) => {
    try {
      return await updateUser(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
