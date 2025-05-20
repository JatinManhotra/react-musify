import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSongsList : [],
    isDragging : false,
    previewUrl: null,
    isPlaying: false,
    currentSongID: null,
    artistData: null,
    // playlistsData: [],
};

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers:{
        setCurrentSongsList: (state,action)=>{
            state.currentSongsList = action.payload;
        },
        setDragging : (state, action)=>{
            state.isDragging = action.payload;
        },
        setPreviewUrl: (state, action) => {
            state.previewUrl = action.payload;
        },
        setPlaying: (state, action)=>{
            state.isPlaying = action.payload.isPlaying;
            state.currentSongID = action.payload.songID;
        },
        setArtistData: (state, action)=>{
            state.artistData = action.payload;
        },
        // setPlaylistsData: (state, action)=>{
        //     state.playlistsData = action.payload;
        // },
    }
})

export const  {setCurrentSongsList, setDragging, setPreviewUrl, setPlaying, setArtistData } = playerSlice.actions;
export default playerSlice.reducer