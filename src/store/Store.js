import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./slices/BasketSlice";

export const store = configureStore({
    reducer: {
        basket: basketSlice.reducer
    }
})