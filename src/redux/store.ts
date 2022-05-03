import { configureStore } from '@reduxjs/toolkit'
import baseSlice from './baseSlice'
import gallerySlice from './gallerySlice'

export const store = configureStore({
    reducer: {
        base: baseSlice,
        gallery: gallerySlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch