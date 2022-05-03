import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import shape from '../images/avatar/base.png'

export interface base {
    shape: { url: string | null, name: string | null },
    glasses: { url: string | null, name: string | null },
    nose: { url: string | null, name: string | null },
    mouth: { url: string | null, name: string | null },
    beard: { url: string | null, name: string | null },
    eyes: { url: string | null, name: string | null },
    hair: { url: string | null, name: string | null },
}

const initialState: base = {
    shape: { url: shape, name: 'shape' },
    glasses: { url: null, name: null },
    nose: { url: null, name: null },
    mouth: { url: null, name: null },
    beard: { url: null, name: null },
    eyes: { url: null, name: null },
    hair: { url: null, name: null },
}


export const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        setBase: (state, action: PayloadAction<{ url: string, category: string }>) => {
            state[action.payload.category as keyof typeof state].url = action.payload.url
            state[action.payload.category as keyof typeof state].name = action.payload.category
        },
        reset: () => {
            return initialState
        }
    }
})

export const { setBase, reset } = baseSlice.actions
export default baseSlice.reducer