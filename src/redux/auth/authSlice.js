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

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, state => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, state => {
//         state.isRefreshing = false;
//       });
//   },
// });

// export const authReducer = authSlice.reducer;
