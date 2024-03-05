import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {getBoards, addBoard} from '../../services/boardService'

export const fetchBoardsThunk = createAsyncThunk(
  'board/fetchBoards',
  async () => {
    return await getBoards();
  }
);

export const addBoardThunk = createAsyncThunk(
  'board/addBoards',
  async body => {
    return await addBoard(body);
  }
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
