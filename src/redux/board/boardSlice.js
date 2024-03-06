import { createSlice } from '@reduxjs/toolkit';
import { deleteBoard, getBoards, postBoard, updateBoard } from './boardThunks';
import * as HelpersReducer from './helpersSlice';

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
  extraReducers: builder => {
    builder
      .addCase(getBoards.fulfilled, HelpersReducer.handleFulfilledGetBoards)
      .addCase(postBoard.fulfilled, HelpersReducer.handleFulfilledAddBoard)
      .addCase(deleteBoard.fulfilled, HelpersReducer.handleFulfilledDeleteBoard)
      .addCase(updateBoard.fulfilled, HelpersReducer.handleFulfilledUpdateBoard)
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        HelpersReducer.handleFulfilled
      )
      .addMatcher(
        action => action.type.endsWith('pending'),
        HelpersReducer.handlePending
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        HelpersReducer.handleReject
      );
  },
});

export const boardReducer = boardSlice.reducer;
