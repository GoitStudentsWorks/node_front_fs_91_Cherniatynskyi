import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  getProfileThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
  updaterUserData,
  updaterUserTheme,
} from './authThunks';
import * as HelpersReducer from './helpersAuthReducer';

const initialState = {
  user: { name: null, email: null },
  token: null,
  tokenExpiration: null,
  isLoggedIn: false,
  error: '',
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, HelpersReducer.handleFulfilledLogin)
      .addCase(registerThunk.fulfilled, HelpersReducer.handleFulfilledRegister)
      .addCase(getProfileThunk.fulfilled, HelpersReducer.handleFulfilledProfile)
      .addCase(
        fetchCurrentUser.fulfilled,
        HelpersReducer.handleFulfilledFetchCurrentUser
      )
      .addCase(logoutThunk.fulfilled, HelpersReducer.handleFulfilledLogout)
      .addCase(
        updaterUserData.fulfilled,
        HelpersReducer.handleFulfilledUpdateUserData
      )
      .addCase(updaterUserTheme.fulfilled, HelpersReducer.handleUpdateTheme)
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
