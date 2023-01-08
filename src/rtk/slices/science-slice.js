import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const category = 'science';
const apiKey = '4a36d800e6ea4bd2b381b14ba5aa69cd';

const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

export const fechScience = createAsyncThunk ('scienceSlice/fechScience', async () => {

    const res = await axios.get(apiUrl);
    const data = await res.data.articles;
    return data;

});

export const scienceSlice = createSlice ({
    initialState: [],
    name: 'scienceSlice',
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fechScience.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const {} = scienceSlice.actions;

export default scienceSlice.reducer;