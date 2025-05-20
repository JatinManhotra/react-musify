import { configureStore } from "@reduxjs/toolkit";
import { deezerApi } from "./services/deezer";
import playerReducer from './slice/playerSlice'

export const store = configureStore({
    reducer:{
        [deezerApi.reducerPath] : deezerApi.reducer,
        player: playerReducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(deezerApi.middleware)

})