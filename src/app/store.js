import { configureStore } from "@reduxjs/toolkit";
import textReducer from '../features/TextBox/TextBoxSlice';
import imageReducer from '../features/Images/imagesSlice';
import quoteReducer from '../features/Quotes/QuotesSlice';

export default configureStore({
    reducer: {
        texts: textReducer,
        image: imageReducer,
        quotes: quoteReducer,
    }
})