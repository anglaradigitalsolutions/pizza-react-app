import { createSlice } from '@reduxjs/toolkit'

export const cartSotre = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem('pizzaCart')) ?? [],
    },
    reducers: {
        incrementByAmount: (state, action) => {
            // Array.push(...state.items, action.payload)
            state.items = [...state.items, action.payload]
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem("pizzaCart", JSON.stringify(state.items))
        },
        incrementItem: (state, action) => {
            state.items.forEach((element) => {
                if (element.id === action.payload) {
                    element.qty = element.qty + 1;
                }
            });
            localStorage.setItem("pizzaCart", JSON.stringify(state.items))
        },
        decrementItem: (state, action) => {
            state.items.forEach((element) => {
                if (element.qty > 1 && element.id === action.payload) {
                    element.qty = element.qty - 1;
                }
            });
            localStorage.setItem("pizzaCart", JSON.stringify(state.items))
        }
    },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount, deleteItem, incrementItem, decrementItem } = cartSotre.actions

export default cartSotre.reducer