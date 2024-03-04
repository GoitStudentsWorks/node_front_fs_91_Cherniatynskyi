import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBoards = createAsyncThunk(
  'boards/fetchBoards',
  async (_, thunkAPI) => {}
);

export const addCard = createAsyncThunk(
  'cards/add',
  async ({ values, columnId }, thunkAPI) => {
    try {
      const res = await axios.post(`/cards/${columnId}`, values);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
