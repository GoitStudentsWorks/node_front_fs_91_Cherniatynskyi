import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const needHelpAction = createAsyncThunk(
  'help/needHelp',
  async ({ email, comment }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/help', {
        email,
        comment,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
