import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import PlayerContextProvider from './context/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
        <Provider store={store}>
      <PlayerContextProvider>
          <App />
      </PlayerContextProvider>
        </Provider>
    </HashRouter>
  </StrictMode>,
)
