import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cakeSclice';
import icecreamReducer from '../features/icecreamSclice'
import userReducer from '../features/userSclice'


export const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    } 
});

console.log('Initial state', store.getState());
store.subscribe(() => console.log('Updated state', store.getState()));
// store.dispatch(cake.ordered());
// store.dispatch(icecream.ordered());
// store.dispatch(icecream.restock(1));

// store.dispatch(fetchUsers());