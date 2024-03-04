import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
  currentBoard: null,
  currentBoardId: null,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
});

export const authReducer = boardSlice.reducer;
