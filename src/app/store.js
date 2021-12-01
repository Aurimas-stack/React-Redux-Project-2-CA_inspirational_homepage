import { configureStore } from "@reduxjs/toolkit";
import textReducer from '../features/TextBox/TextBoxSlice';
import imageReducer from '../features/Images/imagesSlice';

export default configureStore({
    reducer: {
        texts: textReducer,
        image: imageReducer
    }
})