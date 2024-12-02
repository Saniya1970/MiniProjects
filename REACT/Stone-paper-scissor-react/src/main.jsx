import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Practice from './component/Practice.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Practice />
    {/* <App /> */}
  </StrictMode>,
)
