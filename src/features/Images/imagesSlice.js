import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadImage = createAsyncThunk(
    "image/getImage",
    async() => {
        const apiKey = 'JbY5DkAIxjXte_atw6NxtH6pjyctS66c6XUZPflK74Q';
        const link = `https://api.unsplash.com/photos/?client_id=${apiKey}`;
        const data = await fetch(link);
        const json = await data.json();
        return json;
    }
)

export const imagesSlice = createSlice({
    name: 'image',
    initialState: {
        image: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadImage.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadImage.fulfilled]: (state, action) => {
            state.image.push(action.payload)
            state.isLoading = false;
            state.hasError = false;
        },
        [loadImage.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const {addImage} = imagesSlice.actions; 
export const selectImage = state => state.image.image
export default imagesSlice.reducer;