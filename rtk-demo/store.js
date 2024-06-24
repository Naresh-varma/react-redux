const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeSclie = require('./features/cakeSclice');
const icecreamSclice = require('./features/icecreamSclice');
const icecream = require('./features/icecreamSclice').icecream;
const cake = require('./features/cakeSclice').cake;
const userSlice = require('./features/userSclice');
const fetchUsers = require('./features/userSclice').fetchUsers
const store = configureStore({
    reducer: {
        cake: cakeSclie,
        icecream: icecreamSclice,
        user: userSlice,
    } 
});

console.log('Initial state', store.getState())
store.subscribe(() => console.log('Updated state', store.getState()));
// store.dispatch(cake.ordered());
// store.dispatch(icecream.ordered());
// store.dispatch(icecream.restock(1));

store.dispatch(fetchUsers());