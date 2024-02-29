import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access_token: '',
    isLoading: false,
    error: '',
    profile: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{ }})