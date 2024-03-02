// basketSlice.ts

import { createSlice } from "@reduxjs/toolkit";

// Определение типов
export interface BasketItem {
    title: string
    service_id: number;
    price: number
}

interface BasketState {
    items: BasketItem[];
    totalQuantity: number;
    totalPrice: number;
}

const initialState: BasketState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {

        addBasket(state, action) {
            const existingItemIndex = state.items.findIndex(item => item.service_id === action.payload.service_id);
            if (existingItemIndex !== -1) {
                return
            } else {

                state.items.push({
                    title: action.payload.title,
                    service_id: action.payload.service_id,
                    price: action.payload.price
                    });
                state.totalPrice += action.payload.price
                state.totalQuantity +=1
            }
        },
        removeBasket(state, action) {
            state.items = state.items.filter(item => item.service_id !== action.payload);
            state.totalQuantity -=1
        },
        clearBasket(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
});

// Экспорт экшенов
export const { addBasket, removeBasket, clearBasket } = basketSlice.actions;

// Экспорт редюсера
export default basketSlice.reducer;
