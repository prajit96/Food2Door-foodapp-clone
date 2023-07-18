import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import { MenuPage } from './MenuPage'
import ServicesPage from './ServicePage'
import AboutUsPage from './AboutUsPage'
import CartPage from './CartPage'

const Allroutes = () => {
  return <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Login/>} />
    <Route path='/menupage' element={<MenuPage/>}/>
    <Route path='servicepage' element={<ServicesPage/>}/>
    <Route path='/aboutuspage' element={<AboutUsPage/>}/>
    <Route path='/cart' element={<CartPage/>}/>
  </Routes>
}

export default Allroutes