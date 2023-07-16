import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import { MenuPage } from './MenuPage'
import ServicesPage from './ServicePage'
import AboutUsPage from './AboutUsPage'

const Allroutes = () => {
  return <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Login/>} />
    <Route path='/menupage' element={<MenuPage/>}/>
    <Route path='servicepage' element={<ServicesPage/>}/>
    <Route path='/aboutuspage' element={<AboutUsPage/>}/>
  </Routes>
}

export default Allroutes