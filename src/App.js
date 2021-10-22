import React from 'react'
import Navbar from './Layouts/Navbar'
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App
