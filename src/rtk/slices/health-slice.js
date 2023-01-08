import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const category = 'health';
const apiKey = '4a36d800e6ea4bd2b381b14ba5aa69cd';

const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

export const fechHealth = createAsyncThunk ('healthSlice/fechHealth', async () => {

    const res = await axios.get(apiUrl);
    const data = await res.data.articles;
    return data;

});

export const healthSlice = createSlice ({
    initialState: [],
    name: 'healthSlice',
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fechHealth.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const {} = healthSlice.actions;

export default healthSlice.reducer;