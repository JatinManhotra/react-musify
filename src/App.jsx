import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Discover from './pages/Discover'
import { Route, Routes, useLocation } from 'react-router-dom'
import TopCharts from './components/TopCharts'
import TopArtists from './components/TopArtists'
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import SongDetails from './pages/SongDetails'
import ArtistDetails from './pages/ArtistDetails'

const App = () => {

  const location = useLocation();
  const showSideComponents = location.pathname === "/"

  return (
    <>
    <header>
      <Navbar/>
    </header>

    <main>
      <Sidebar/>

      <Routes>
        <Route path='/' element={<Discover />}/>
        <Route path='/song/:id' element={<SongDetails />}/>
        <Route path='/artist/:id' element={<ArtistDetails />}/>
        <Route path='*' />
      </Routes>

      {
        showSideComponents && <section className='absolute top-10 right-5 bottom-5 overflow-y-scroll hide-scrollbar'>
        <TopCharts />
        <TopArtists />
      </section>
      }

      <MusicPlayer/>

    </main>

    <footer>
      
    </footer>
    </>
  )
}

export default App