import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'
import Sample from './componenets/Sample'
import Tab from './componenets/Tab'

// const App = () => (
//   <div>
//     <h1>My Tabs Component</h1>
//     <Tab />
//   </div>
// );
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Sample />
    {/* <Tab /> */}
  </StrictMode>,
)
