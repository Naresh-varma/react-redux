import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    noOfIceCreams: 10
};

const iceCreamSclice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfIceCreams--;
        },
        restock: (state, action) => {
            state.noOfIceCreams += action.payload;
        }
    }
})

export default iceCreamSclice.reducer;
export const icecream = iceCreamSclice.actions;