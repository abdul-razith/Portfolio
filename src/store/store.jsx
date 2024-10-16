import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from '../slice/navbarSlice'

export const store = configureStore({
    reducer : {
        navbar : navbarReducer,
    }
})