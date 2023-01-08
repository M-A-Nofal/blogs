import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const category = 'technology';
const apiKey = '4a36d800e6ea4bd2b381b14ba5aa69cd';

const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

export const fechTechnology = createAsyncThunk ('technologySlice/fechTechnology', async () => {

    const res = await axios.get(apiUrl);
    const data = await res.data.articles;
    return data;

});

export const technologySlice = createSlice ({
    initialState: [],
    name: 'technologySlice',
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fechTechnology.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const {} = technologySlice.actions;

export default technologySlice.reducer;