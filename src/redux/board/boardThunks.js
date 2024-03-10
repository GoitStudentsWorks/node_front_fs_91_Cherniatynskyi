import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as BoardsService from 'services/boardService';

export const fetchBoards = createAsyncThunk(
  'boards/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persostedToken = state.auth.token;
    try {
      return await BoardsService.fetchGetBoards(persostedToken);
    } catch (e) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (newBoard, thunkAPI) => {
    try {
      return await BoardsService.fetchAddBoard(newBoard);
    } catch (e) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (_id, thunkAPI) => {
    try {
      return await BoardsService.fetchDeleteBoard(_id);
    } catch (e) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ id, updatedBoard }, thunkAPI) => {
    try {
      toast.success('Your board was successfully updated');
      return await BoardsService.fetchUpdateBoard(id, updatedBoard);
    } catch (e) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
