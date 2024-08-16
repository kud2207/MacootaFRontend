import { configureStore, createSlice } from '@reduxjs/toolkit'

const comSlice = createSlice({
    name : 'Com',
    initialState: {
        question : "",
        reponse: ""
    },
    reducers : {

    }
})

export const mainStore = configureStore({
    reducer :{
        com : comSlice.reducer
    }
})