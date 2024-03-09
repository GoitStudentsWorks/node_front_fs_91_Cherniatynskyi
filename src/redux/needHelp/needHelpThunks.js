import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { needHelp } from 'services/needHelpService';

export const needHelpAction = createAsyncThunk(
  'help/needHelp',
  async ({ email, comment }, thunkAPI) => {
    try {
      const data = await needHelp({
        email,
        comment,
      });
      toast.success('Your message was successfully send');
      return data;
    } catch (error) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
