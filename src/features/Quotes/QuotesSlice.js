import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadQuotes = createAsyncThunk(
    'quotes/getQuotes',
    async() => {
        const apiLink = 'https://type.fit/api/quotes';
        const data = await fetch(apiLink);
        const json = await data.json();
        return json;
    }
);

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        quotes: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadQuotes.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadQuotes.fulfilled]: (state, action) => {
            state.quotes.push(action.payload);
            state.isLoading = false;
            state.hasError = false;
        },
        [loadQuotes.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectQuotes = state => state.quotes.quotes;
export default quotesSlice.reducer;