import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Practise from './Componants/Practise.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Practise />
  </StrictMode>,
)
