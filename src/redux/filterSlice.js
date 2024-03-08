import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
    name: 'filter',
    initialState: {
        filterValue: null,
    },
    reducers:{
        setFilterValue: (state, {payload}) =>{
            state.filterValue = payload
        },
        clearFilter: (state, action) =>{
            state.filterValue = null
        },
    }
})



export const {setFilterValue, clearFilter} = FilterSlice.actions