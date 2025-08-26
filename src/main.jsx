import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyMap from './MyMap.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyMap />

  </StrictMode>,
)
