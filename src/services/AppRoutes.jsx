import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
const AppRoutes = () => {
  return (
   <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
   </>
  )
}

export default AppRoutes;
