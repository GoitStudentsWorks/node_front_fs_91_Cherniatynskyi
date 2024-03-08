import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://task-pro-7x3t.onrender.com/';
const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchBoards = createAsyncThunk(
  'boards/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      const resp = await axios.get('/boards');
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (newBoard, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      const resp = await axios.post('/boards', newBoard);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (_id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      await axios.delete(`/boards/${_id}`);
      return _id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ( {id, updatedBoard} , thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      await axios.put(`/boards/${id}`, updatedBoard);
      return updatedBoard;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
