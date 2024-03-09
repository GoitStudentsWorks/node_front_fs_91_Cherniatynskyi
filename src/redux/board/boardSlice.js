import { createSlice } from '@reduxjs/toolkit';
import { addBoard, deleteBoard, fetchBoards, updateBoard } from './boardThunks';
import * as HelpersReducer from './helpersBoardReducer';

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
  currentBoardId: null,
};

export const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setCurrentBoardId(state, { payload }) {
      state.currentBoardId = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBoards.fulfilled, HelpersReducer.handleFulfilledGetBoard)
      .addCase(addBoard.fulfilled, HelpersReducer.handleFulfilledAddBoard)
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
        HelpersReducer.handleRejected
      );
  },
});

export const boardReducer = boardSlice.reducer;
export const { setCurrentBoardId } = boardSlice.actions;
