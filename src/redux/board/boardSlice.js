import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addBoardThunk, fetchBoardsThunk } from './boardThunks';

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
  currentBoard: null,
  currentBoardId: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
  state.isLoggedIn = true;
};

const handleFulfilledGetBoards = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.boards = payload;
};

const handleFulfilledAddBoards = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.currentBoardId = payload._id;
  state.boards.unshift({ ...payload });
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchBoardsThunk.fulfilled, handleFulfilledGetBoards)
      .addCase(addBoardThunk.fulfilled, handleFulfilledAddBoards)
      .addMatcher(
        isAnyOf(fetchBoardsThunk.pending, addBoardThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchBoardsThunk.rejected, addBoardThunk.rejected),
        handleRejected
      );
  },
});

export const authReducer = boardSlice.reducer;
