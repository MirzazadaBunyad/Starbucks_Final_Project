import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: JSON.parse(localStorage.getItem("Orders")) || []
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        init: (state, action) => {
            state.basket = [...state.basket, action.payload]
        },
        counter: (state, action) => {
            state.basket = state.basket.map((item) => {
                if (item.id === action.payload.itemId & (item.count + action.payload.getVal >= 0)) {
                    return { ...item, count: item.count + action.payload.getVal }
                } else return item;
            })
            updateLocalStorage(state.basket);
        },
    }
})
const updateLocalStorage = (basket) => {
    localStorage.setItem("Orders", JSON.stringify(basket));
};
export const { init, counter } = basketSlice.actions
export default basketSlice.reducer;