import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllRoutes from './AllRoutes'

function App() {
 

  return (
    <>
      <BrowserRouter>
            <AllRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
