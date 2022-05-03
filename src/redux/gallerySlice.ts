import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { base } from './baseSlice'

const initialState: base[] = []

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        saveAvatar: (state, action: PayloadAction<{ avatar: base }>) => {
            const avatarItemsArray = Object.values(action.payload.avatar)
            for (let i = 0; i < avatarItemsArray.length - 1; i++) {
                if (avatarItemsArray[i].url == null) {
                    throw 'Complete your avatar'
                }
            }
            state.push({
                shape: action.payload.avatar.shape,
                glasses: action.payload.avatar.glasses,
                nose: action.payload.avatar.nose,
                mouth: action.payload.avatar.mouth,
                beard: action.payload.avatar.beard,
                eyes: action.payload.avatar.eyes,
                hair: action.payload.avatar.hair
            })

        }
    }
})

export const { saveAvatar } = gallerySlice.actions
export default gallerySlice.reducer