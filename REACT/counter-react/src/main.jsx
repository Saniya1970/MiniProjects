import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Count from './componenets/Count'
import './App.css'
import App from './App'

// import './componenets/Count.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
