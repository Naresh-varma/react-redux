import { createSlice } from '@reduxjs/toolkit';
import { icecream } from './icecreamSclice';

const initialState = {
    noOfCakes: 10,
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfCakes--;
        },
        restock: (state, action) => {
            state.noOfCakes += action.payload || 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(icecream.ordered, (state) => {
            state.noOfCakes--;
        })
    }
});

export default cakeSlice.reducer;
export const cake = cakeSlice.actions;