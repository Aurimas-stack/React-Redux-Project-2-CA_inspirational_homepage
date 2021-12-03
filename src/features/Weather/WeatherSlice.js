import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadWeather = createAsyncThunk(
    "weather/loadWeather",
    async({lat, long}) => {
        const apiKey = 'dfe577de71ea5813ced8716b9cf3a84d';
        const link = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
        const data = await fetch(link);
        const json = await data.json();
        return json;
    }
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: {
        [loadWeather.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadWeather.fulfilled]: (state, action) => {
            state.weather.push(action.payload);
            state.isLoading = false;
            state.hasError = false;
        },
        [loadWeather.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export default weatherSlice.reducer;
export const selectWeather = state => state.weather.weather;