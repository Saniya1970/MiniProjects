import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sample from './componenets/Sample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Sample />
  </StrictMode>,
)
