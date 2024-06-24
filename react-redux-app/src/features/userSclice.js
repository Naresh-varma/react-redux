import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: '',
};

const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.data;
            // Promise(resolve => setTimeout(resolve, 3000))
            //     .then(() => res.data)
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
            state.error = action.error.message;
            state.loading = false;
        })
    }
});

export default userSclice.reducer;
const _fetchUsers = fetchUsers;
export { _fetchUsers as fetchUsers };