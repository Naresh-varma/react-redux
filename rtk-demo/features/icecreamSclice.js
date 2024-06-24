const createSlice = require('@reduxjs/toolkit').createSlice;

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

module.exports = iceCreamSclice.reducer;
module.exports.icecream = iceCreamSclice.actions;