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
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        incrementItem: (state, action) =>{
            // let tempstate = state.items
            // tempstate.forEach((element)=>{
            //     if(element.id === action.id){
            //         element.qty = element.qty + 1;
            //         console.log(element)
            //     }
            // });
            // console.log(state.items);
        }
    },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount, deleteItem, incrementItem } = cartSotre.actions

export default cartSotre.reducer