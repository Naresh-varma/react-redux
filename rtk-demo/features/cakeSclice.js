const createSlice = require('@reduxjs/toolkit').createSlice;
const icecream = require('./icecreamSclice').icecream;

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
        });
    }
});

module.exports = cakeSlice.reducer;
module.exports.cake = cakeSlice.actions;