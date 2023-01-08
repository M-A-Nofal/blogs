import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const category = 'sports';
const apiKey = '4a36d800e6ea4bd2b381b14ba5aa69cd';

const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

export const fechSports = createAsyncThunk ('sportsSlice/fechSports', async () => {

    const res = await axios.get(apiUrl);
    const data = await res.data.articles;
    return data;

});

export const sportsSlice = createSlice ({
    initialState: [],
    name: 'sportsSlice',
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fechSports.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const {} = sportsSlice.actions;

export default sportsSlice.reducer;