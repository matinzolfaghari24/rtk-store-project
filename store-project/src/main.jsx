import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store.js'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
    <Provider store={store}>

    <App />
    </Provider>
    </BrowserRouter>
  // </StrictMode>,
)
