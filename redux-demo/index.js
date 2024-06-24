const redux = require('redux');
const reduxlogger = require('redux-logger');
const CAKE_ORDERED = 'CAKE_ORDERED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

const iceCreaminitialState = {
    numOficeCreams: 10,
}
const cakeinitialState = {
    numOfCakes: 10,
}

function orderCake() {
    return {
        type: CAKE_ORDERED
    }
}
function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED
    }
}

function restockCake(qty) {
    return {
        type: CAKE_RESTOCKED,
        quantity: qty,
    }
}
function restockIceCream(qty) {
    return {
        type: ICECREAM_RESTOCKED,
        quantity: qty,
    }
}


const cakeReducer = (state = cakeinitialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                numOfCakes: state.numOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.quantity,
            }
        default:
            return state;
    }
}

const iceCreamReducer = (state = iceCreaminitialState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                numOficeCreams: state.numOficeCreams - 1,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOficeCreams: state.numOficeCreams + action.quantity,
            }
        default:
            return state;
    }
}

const reducer = redux.combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
})

// const logger = (store) => {
//     console.log('Middle ware triggred');
//     return store;
// }
const store = redux.createStore(reducer, redux.applyMiddleware(reduxlogger.logger));

console.log('Initial store', store.getState());

const unsubscribe = store.subscribe(() => { console.log('state updated', store.getState())});

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(restockIceCream(3))

unsubscribe();
