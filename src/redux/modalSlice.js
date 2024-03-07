import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        modalContent: null,
        sideBarIsOpen: false,
        selectedElId: null
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
        },
        openSidebar: (state, {payload}) =>{
            state.sideBarIsOpen = true
            
        },
        closeSidebar: (state, action) =>{
            state.sideBarIsOpen = false
            
        }
    }
})



export const {openModal, closeModal, openSidebar, closeSidebar} = ModalSlice.actions