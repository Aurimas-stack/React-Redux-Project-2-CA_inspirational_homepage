import { configureStore } from "@reduxjs/toolkit";
import textReducer from '../features/TextBox/TextBoxSlice';
import imageReducer from '../features/Images/imagesSlice';
import quoteReducer from '../features/Quotes/QuotesSlice';
import weatherReducer from '../features//Weather/WeatherSlice';

export default configureStore({
    reducer: {
        texts: textReducer,
        image: imageReducer,
        quotes: quoteReducer,
        weather: weatherReducer
    }
})