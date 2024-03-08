import { createAsyncThunk } from '@reduxjs/toolkit';
import * as BoardsService from 'services/boardService';

export const fetchBoards = createAsyncThunk(
  'boards/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persostedToken = state.auth.token;
    try {
      return await BoardsService.fetchGetBoards(persostedToken);
    } catch (e) {
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
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ id, updatedBoard }, thunkAPI) => {
    try {
      return await BoardsService.fetchUpdateBoard(id, updatedBoard);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
