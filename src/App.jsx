import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";
import { Route, Routes, useLocation } from "react-router-dom";
import TopCharts from "./components/TopCharts";
import TopArtists from "./components/TopArtists";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import SongDetails from "./pages/SongDetails";
import ArtistDetails from "./pages/ArtistDetails";
import ArtistSongs from "./pages/ArtistSongs";
import AlbumDetails from "./pages/AlbumDetails";
import PlaylistDetails from "./pages/PlaylistDetails";
import SearchResults from "./pages/SearchResults";
import SearchResultsSkeleton from "./skeleton/SearchResultsSkeleton";
import DiscoverSkeleton from "./skeleton/DiscoverSkeleton";
import TopChartsSkeleton from "./skeleton/TopChartsSkeleton";
import TopArtistsSkeleton from "./skeleton/TopArtistsSkeleton";
import SongDetailsSkeleton from "./skeleton/SongDetailsSkeleton";
import ArtistDetailsSkeleton from "./skeleton/ArtistDetailsSkeleton";
import AlbumDetailsSkeleton from "./skeleton/AlbumDetailsSkeleton";
import PlaylistDetailsSkeleton from "./skeleton/PlaylistDetailsSkeleton";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import { PlayerContext } from "./context/PlayerContext";
import { FaHeart } from "react-icons/fa";

const App = () => {
  const location = useLocation();
  const showSideComponents = location.pathname === "/";

  const { top10Error, albumsError, playlistError } = useContext(PlayerContext);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/song/:id" element={<SongDetails/>} />
          <Route path="/artist/:id" element={<ArtistDetails />} />
          <Route path="/artist/:id/songs" element={<ArtistSongs />} />
          <Route path="/album/:id" element={<AlbumDetails />} />
          <Route path="/playlist/:id" element={<PlaylistDetails />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {showSideComponents && (
          <section
            className={`hide-scrollbar  overflow-y-scroll p-2 sm:ml-[13rem] xl:ml-0 sm:p-0 sm:pr-4 xl:absolute  xl:top-10 xl:right-2 2xl:right-5 xl:bottom-5 xl:p-0 ${top10Error || albumsError || playlistError ? "hidden" : "block"}`}
          >
            <TopCharts />
            <TopArtists />
          </section>
        )}

        <MusicPlayer />
      </main>

      <footer>
        <section className="fixed right-0 bottom-0 left-0 z-50 bg-blue-500">
          <h3 className="flex items-center justify-center gap-2 text-sm">
            Made with <FaHeart className="text-rose-500" /> by{" "}
            <a
              className="hover:text-white"
              href="https://github.com/JatinManhotra"
              target="_blank"
            >
              Jatin Manhotra
            </a>
          </h3>
        </section>
      </footer>
    </>
  );
};

export default App;
