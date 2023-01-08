import { configureStore } from '@reduxjs/toolkit'
import businessSlice from './slices/business-slice'
import entertainmentSlice from './slices/entertainment-slice'
import healthSlice from './slices/health-slice'
import scienceSlice from './slices/science-slice'
import sportsSlice from './slices/sports-slice'
import technologySlice from './slices/technology-slice'

export const store = configureStore({
    reducer: {
        business: businessSlice,
        entertainment: entertainmentSlice,
        health: healthSlice,
        science: scienceSlice,
        sports: sportsSlice,
        technology: technologySlice,
    },
})


