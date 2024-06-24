const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: '',
};

const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.data.map(u => u.id);
        })
});

const userSclice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            console.log('loading ....');
            state.loading = true;
            state.error = '';
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log('users fetched ....');
            state.loading = false;
            state.error = '';
            state.users = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log('users fetch failed ....');
            state.error = action.payload;
        })
    }
});

module.exports = userSclice.reducer;
module.exports.fetchUsers = fetchUsers;