import React, { useState } from 'react'
import explorer from "./Data/FolderData"
import Folder from './componenets/Floder'
import "./App.css"

export default function App() {
     
  const[explorerData,setExplorerData]=useState(explorer);

  // console.log(explorerData);
  return (
   <>
   <div className="app">
   <Folder explorer={explorerData}/>
   </div>
   </>
  )
}
