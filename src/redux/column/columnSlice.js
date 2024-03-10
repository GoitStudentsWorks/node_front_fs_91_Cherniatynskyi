import { createSlice } from '@reduxjs/toolkit';
import {
  getColumns,
  postColumn,
  deleteColumn,
  updateColumn,
} from './columnThunk';
import * as HelpersReducer from './helpersColumnReducer';

const initialState = {
  columns: [],
  isLoading: false,
  error: null,
  currentColumnId: null
};

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    setCurrentColumnId(state, {payload}){
      state.currentColumnId = payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getColumns.fulfilled, HelpersReducer.handleFulfilledGetColumns)
      .addCase(postColumn.fulfilled, HelpersReducer.handleFulfilledAddColumn)
      .addCase(
        deleteColumn.fulfilled,
        HelpersReducer.handleFulfilledDeleteColumn
      )
      .addCase(
        updateColumn.fulfilled,
        HelpersReducer.handleFulfilledUpdateColumn
      )
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

export const columnReducer = columnSlice.reducer;
export const {setCurrentColumnId} = columnSlice.actions
