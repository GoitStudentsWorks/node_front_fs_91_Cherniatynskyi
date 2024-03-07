
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addBoard, deleteBoard, fetchBoards, updateBoard } from './boardThunks';


const initialState = {
  boards: [],
  isLoading: false,
  error: null,
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

const handleFulfilledGetBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.boards = payload;
};

const handleFulfilledAddBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.currentBoardId = payload._id;
  state.boards.push({ ...payload });
};

const handleFulfilledDeleteBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.currentBoardId = payload._id;
  const index = state.boards.findIndex(
    item => item._id === payload
  );
  state.boards.splice(index, 1);
};

const handleFulfilledUpdateBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  const index = state.boards.findIndex(
    item => item._id === payload
  );
  state.boards[index] = payload;
};


export const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setCurrentBoardId(state, {payload}){
      state.currentBoardId = payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBoards.fulfilled, handleFulfilledGetBoard)
      .addCase(addBoard.fulfilled, handleFulfilledAddBoard)
      .addCase(deleteBoard.fulfilled, handleFulfilledDeleteBoard)
      .addCase(updateBoard.fulfilled, handleFulfilledUpdateBoard)
      .addMatcher(
        isAnyOf(fetchBoards.pending, addBoard.pending, deleteBoard.pending, updateBoard.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchBoards.rejected, addBoard.rejected, deleteBoard.rejected, updateBoard.rejected),
        handleRejected
      );
  },
});

export const boardReducer = boardSlice.reducer;
export const {setCurrentBoardId} = boardSlice.actions
