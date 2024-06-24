const redux = require('redux');
const axios = require('axios');
const logger = require('redux-logger').logger
const thunk = require('redux-thunk').thunk

const initialState = {
    loading: false,
    users: [],
    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'USER_FETCHING':
            return {
                ...state,
                loading: true,
            }
        case 'USER_FETCHING_FAILED':
            return {
                ...state,
                error: action.error,
            }
        case 'USER_FETCHED':
            return {
                ...state,
                user: action.users,
                error: '',
            }
    }
}

function fetchUser() {
    return fetchUsers;
}

function fetchUsers(dispatch) {
    dispatch({ type: 'USER_FETCHING'});
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            res = res.data.map(u => u.id);
            dispatch({ type: 'USER_FETCHED', users: res });
        })
        .catch((e) => {
            dispatch({ type: 'USER_FETCHING_FAILED', error: e });
        });
}

const store = redux.createStore(reducer, redux.applyMiddleware(thunk, logger));

store.dispatch(fetchUser());