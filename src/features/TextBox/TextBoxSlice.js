import { createSlice } from "@reduxjs/toolkit";

export const textBoxSlize = createSlice({
    name: 'text',
    initialState: ['Water Plants', 'Making spaget', 'Climb a V10', 'Make some beats'],
    reducers: {
        addText: (state, action) => {
            state.push(action.payload);
        }
    }
})
export const { addText } = textBoxSlize.actions;
export const selectText = state => state.texts;
export default textBoxSlize.reducer;