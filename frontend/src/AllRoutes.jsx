import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './About';
import UglyShoeList from './ASAPEntity';
import UserForm from './form';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<About />} />
        <Route path="/uglyShoelist" element={<UglyShoeList/>} />
        <Route path="/form" element={<UserForm/>} />
    </Routes>
  )
}

export default AllRoutes