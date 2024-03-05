import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signUp,
  logIn,
  logOut,
  getProfile,
  setToken,
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
