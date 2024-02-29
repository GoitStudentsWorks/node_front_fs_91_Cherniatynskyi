import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        modalContent: null
    },
    reducers:{
        openModal: (state, action) =>{
            state.isOpen = true
            state.modalContent = action.payload
        },
        closeModal: (state, action) =>{
            state.isOpen = false
            state.modalContent = null
        }
    }
})



export const {openModal, closeModal} = ModalSlice.actions