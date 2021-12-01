import { configureStore } from "@reduxjs/toolkit";
import textReducer from '../features/TextBox/TextBoxSlice';

export default configureStore({
    reducer: {
        texts: textReducer
    }
})