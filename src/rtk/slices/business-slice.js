import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const category = 'business';
const apiKey = '4a36d800e6ea4bd2b381b14ba5aa69cd';

const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

export const fechBusiness = createAsyncThunk ('businessSlice/fechBusiness', async () => {

    const res = await axios.get(apiUrl);
    const data = await res.data.articles;
    return data;

});

export const businessSlice = createSlice ({
    initialState: [],
    name: 'businessSlice',
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fechBusiness.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const {} = businessSlice.actions;

export default businessSlice.reducer;