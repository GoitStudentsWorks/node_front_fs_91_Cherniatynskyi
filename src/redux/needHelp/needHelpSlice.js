import { createSlice } from '@reduxjs/toolkit';
import { needHelpAction } from './needHelpThunks';

export const needHelpFormSlice = createSlice({
  name: 'needHelp',
  initialState: {
    message: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(needHelpAction.pending, state => {
        state.message = '';
        state.isLoading = true;
        state.error = null;
      })
      .addCase(needHelpAction.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(needHelpAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const needHelpReducer = needHelpFormSlice.reducer;
