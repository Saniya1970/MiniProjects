import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import Sample from '../component/Sample'
import Heirarchy from '../component/Heirarchy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Heirarchy />
  </StrictMode>,
)
