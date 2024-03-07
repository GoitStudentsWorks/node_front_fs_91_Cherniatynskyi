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

export const loginThunk = createAsyncThunk('auth/login', async body => {
  return await logIn(body);
});

export const registerThunk = createAsyncThunk('auth/register', async body => {
  return await signUp(body);
});

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      return await logOut();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProfileThunk = createAsyncThunk('auth/profile', async () => {
  return await getProfile();
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return;
    }
    setToken(`Bearer ${token}`);
    const data = await getProfile();
    return data;
  }
);

export const updaterUserTheme = createAsyncThunk('auth/theme', async body => {
  return await updateTheme(body);
});

export const updaterUserData = createAsyncThunk(
  'auth/updateUser',
  async (body, { rejectWithValue }) => {
    try {
      return await updateUser(body);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
