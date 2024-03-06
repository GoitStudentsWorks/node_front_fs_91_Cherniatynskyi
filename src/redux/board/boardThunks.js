import { createAsyncThunk } from '@reduxjs/toolkit';
import * as BoardsService from 'services/boardService';

export const getBoards = createAsyncThunk(
  'boards/getBoards',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    try {
      return await BoardsService.fetchGetBoards(persistedToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postBoard = createAsyncThunk(
  'boards/postBoard',
  async (newBoard, { rejectWithValue }) => {
    try {
      return await BoardsService.fetchAddBoard(newBoard);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id, { rejectWithValue }) => {
    try {
      return await BoardsService.fetchDeleteBoard(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ id, newBoard }, { rejectWithValue }) => {
    try {
      return await BoardsService.fetchUpdateBoard(id, newBoard);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
