import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refreshUser } from './operations';
import { fetchCurrentUser, getProfileThunk, loginThunk, logoutThunk, registerThunk } from "./authThunks";


const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: '',
  isRefreshing: false,
};

const handlePending = (state) =>{
  state.isRefreshing = true
}

const handleFulfilledLogin = (state, {payload}) =>{
  state.isRefreshing = false
  state.error = ''
  state.token = payload.token
  state.user = payload.user
}

const handleFulfilledRegister = (state, {payload}) =>{
  state.isRefreshing = false
  state.error = ''
  state.token = payload.token
  state.user = payload.user
}

const handleFulfilledProfile = (state, {payload}) =>{
  state.isRefreshing = false
  state.error = ''
  state.user = payload
}

const handleFulfilledLogout = (state, {payload}) =>{
  state.isRefreshing = false
  state.error = ''
  state.user = null
  state.token = ''
}

const handleFulfilledFetchCurrentUser = (state, {payload}) =>{
  state.user = payload
}

const handleRejected = (state, {payload}) =>{
  state.isRefreshing = false
  state.error = payload
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>{
      builder
      .addCase(loginThunk.fulfilled, handleFulfilledLogin)
      .addCase(registerThunk.fulfilled, handleFulfilledRegister)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addCase(fetchCurrentUser.fulfilled, handleFulfilledFetchCurrentUser)
      .addCase(logoutThunk.fulfilled, handleFulfilledLogout)
      .addMatcher(isAnyOf(loginThunk.pending, getProfileThunk.pending, registerThunk.pending, logoutThunk.pending), handlePending)
      .addMatcher(isAnyOf(loginThunk.rejected, getProfileThunk.rejected, registerThunk.rejected, logoutThunk.rejected), handleRejected)
  }
})

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
