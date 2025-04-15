import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './About';
import UglyShoeList from './ASAPEntity';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<About />} />
        <Route path="/uglyShoelist" element={<UglyShoeList/>} />
    </Routes>
  )
}

export default AllRoutes