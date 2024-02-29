import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        modalContent: null
    },
    reducers:{
        openModal: (state, {payload}) =>{
            state.isOpen = true
            state.modalContent = payload.content
            state.selectedElId = payload.id
        },
        closeModal: (state, action) =>{
            state.isOpen = false
            state.modalContent = null
            state.selectedElId = null
        }
    }
})



export const {openModal, closeModal} = ModalSlice.actions