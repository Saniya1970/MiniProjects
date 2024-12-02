import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sample from './componenets/sample'
import './App.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Sample />
  </StrictMode>,
)
