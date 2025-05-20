import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiKey = import.meta.env.VITE_RAPIDAPI_KEY;

export const deezerApi = createApi({
    reducerPath: "deezerApi",
    baseQuery: fetchBaseQuery({
        baseUrl : "https://deezerdevs-deezer.p.rapidapi.com",
        prepareHeaders: (headers)=>{
            headers.set("x-rapidapi-key", ApiKey);
            headers.set("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
            return headers;
        }
    }),
    endpoints: (builder)=>({
        getTop10Songs : builder.query({
            query : ()=> ({
                url: "https://proxy.corsfix.com/?https://api.deezer.com/chart/0/tracks",
                method: "GET"
            })
        }),
        getTopAlbums : builder.query({
            query: (albumId)=> `/album/${albumId}`
        }),
        getPlaylists : builder.query({
            query : (playlistId)=> ({
                url: `https://proxy.corsfix.com/?https://api.deezer.com/playlist/${playlistId}`,
                method: "GET"
            })
        }),
        getArtist : builder.query({
            query: (artistId)=> `/artist/${artistId}`
        }),
        getSongDetails: builder.query({
            query :(songId)=> `/track/${songId}`
        }),
        getSearchResults: builder.query({
            query :(query)=> `/search?q=${query}`
        }),
    })
})

export const {useGetTop10SongsQuery, useGetTopAlbumsQuery, useGetPlaylistsQuery, useGetArtistQuery, useGetSongDetailsQuery , useGetSearchResultsQuery} = deezerApi;