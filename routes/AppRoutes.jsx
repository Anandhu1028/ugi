import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../src/pages/Home/HomePage'


const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
     
    </Routes>
  )
}

export default AppRoutes