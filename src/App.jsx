import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Discover from './pages/Discover'
import { Route, Routes } from 'react-router-dom'
import TopCharts from './components/TopCharts'
import TopArtists from './components/TopArtists'
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

const App = () => {

  return (
    <>
    <header>
      <Navbar/>
    </header>

    <main>
      <Sidebar/>

      <Routes>
        <Route path='/' element={<Discover />}/>
      </Routes>

      <section className='absolute top-10 right-5 bottom-5 overflow-y-scroll hide-scrollbar'>
        <TopCharts />
        <TopArtists />
      </section>

      <MusicPlayer/>

    </main>

    <footer>
      
    </footer>
    </>
  )
}

export default App