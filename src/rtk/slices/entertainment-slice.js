import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const category = 'entertainment';
const apiKey = '4a36d800e6ea4bd2b381b14ba5aa69cd';

const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

export const fechEntertainment = createAsyncThunk ('entertainmentSlice/fechEntertainment', async () => {

    const res = await axios.get(apiUrl);
    const data = await res.data.articles;
    return data;

});

export const entertainmentSlice = createSlice ({
    initialState: [],
    name: 'entertainmentSlice',
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fechEntertainment.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const {} = entertainmentSlice.actions;

export default entertainmentSlice.reducer;