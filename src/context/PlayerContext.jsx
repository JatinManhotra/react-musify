import React, { createContext, useEffect, useRef, useState } from "react";
import {
  useGetArtistQuery,
  useGetPlaylistsQuery,
  useGetTop10SongsQuery,
} from "../redux/services/deezer";
import { useDispatch, useSelector } from "react-redux";
import {
  setDragging,
  setPlaying,
  setPreviewUrl,
  setArtistData,
  setCurrentSongsList,
} from "../redux/slice/playerSlice";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const playlistIds = [3155776842, 1313621735];

  const dispatch = useDispatch();
  const dragging = useSelector((state) => state.player.isDragging);
  const { isPlaying, previewUrl, currentSongID, currentSongsList } =
    useSelector((state) => state.player);

  const scrollableDivRef1 = useRef();
  const scrollableDivRef2 = useRef();
  const scrollableDivRef3 = useRef();
  const scrollableDivRef4 = useRef();
  const audioRef = useRef();

  const { data: top10data, isFetching: top10Fetching, error: top10Error } = useGetTop10SongsQuery();

  const { data: albumsData, isFetching:albumsFetching } = useGetPlaylistsQuery(playlistIds[0]);
  const topChartsSongs = albumsData?.tracks?.data.slice(0, 5);
  const albums = albumsData?.tracks?.data.slice(0, 10);

  const playlistQuery = playlistIds.map((item) => useGetPlaylistsQuery(item));
  const playlistData = playlistQuery.map((item) => item.data);
  const playlistFetching = playlistQuery[1].isFetching;

  const { data: artist1 } = useGetArtistQuery(topChartsSongs?.[0].artist.id);
  const { data: artist2 } = useGetArtistQuery(topChartsSongs?.[1].artist.id);
  const { data: artist3 } = useGetArtistQuery(topChartsSongs?.[2].artist.id);
  const { data: artist4 } = useGetArtistQuery(topChartsSongs?.[3].artist.id);
  const { data: artist5, isFetching: artistFetching } = useGetArtistQuery(topChartsSongs?.[4].artist.id);

  function dragDiv(e, ref) {
    if (!dragging) return;
    const div = ref.current;
    div.scrollLeft -= e.movementX;
  }

  function dragStop() {
    dispatch(setDragging(false));
  }

  function togglePlay(previewArg, songIDArg, songListArg) {
    const previewToUse = previewArg || previewUrl;
    const songIDToUse = songIDArg || currentSongID;
    const songListToUse = songListArg || currentSongsList;

    if (!previewToUse || !songIDToUse) return;

    const isNewSong = songIDToUse !== currentSongID;

    if (isNewSong) {
      dispatch(setPreviewUrl(previewToUse));
      dispatch(setPlaying({ isPlaying: true, songID: songIDToUse }));
      dispatch(setCurrentSongsList(songListToUse));
    } else {
      dispatch(setPlaying({ isPlaying: !isPlaying, songID: songIDToUse }));
    }
  }

  function playNext() {
    const index = currentSongsList.findIndex(
      (song) => song.id === currentSongID,
    );
    if (index === -1) return;

    const nextIndex = (index + 1) % currentSongsList.length;
    const nextSong = currentSongsList[nextIndex];

    if (nextSong) {
      dispatch(setPreviewUrl(nextSong.preview));
      dispatch(setPlaying({ isPlaying: true, songID: nextSong.id }));
    }
  }

  function playPrevious() {
    const index = currentSongsList.findIndex(
      (song) => song.id === currentSongID,
    );
    if (index === -1) return;

    const prevIndex = index === 0 ? currentSongsList.length - 1 : index - 1;
    const prevSong = currentSongsList[prevIndex];

    if (prevSong) {
      dispatch(setPreviewUrl(prevSong.preview));
      dispatch(setPlaying({ isPlaying: true, songID: prevSong.id }));
    }
  }

  const handlePreviewUrl = (preview) => {
    dispatch(setPreviewUrl(preview));
  };

  useEffect(() => {
    const handleMouseUp = () => dispatch(setDragging(false));
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [dispatch]);

  useEffect(() => {
    if (!top10data) return;
    dispatch(setCurrentSongsList(top10data.data));
  }, [top10data]);

  useEffect(() => {
    if (artist1 && artist2 && artist3 && artist4 && artist5) {
      const artists = [artist1, artist2, artist3, artist4, artist5];
      dispatch(setArtistData(artists));
    }
  }, [artist1, artist2, artist3, artist4, artist5, dispatch]);

  return (
    <PlayerContext.Provider
      value={{
        scrollableDivRef1,
        scrollableDivRef2,
        scrollableDivRef3,
        scrollableDivRef4,
        handlePreviewUrl,
        topChartsSongs,
        albums,
        dragDiv,
        top10data,
        dragging,
        dispatch,
        togglePlay,
        audioRef,
        playlistData,
        playNext,
        playPrevious,
        input,
        setInput,
        searchQuery,
        setSearchQuery,
        top10Fetching,
        top10Error,
        playlistFetching,
        albumsFetching,
        artistFetching
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
