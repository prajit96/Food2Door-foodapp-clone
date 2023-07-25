import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './HomePage'
import { MenuPage } from './MenuPage'
import ServicesPage from './ServicePage'
import AboutUsPage from './AboutUsPage'
import CartPage from './CartPage'
import { SideSignin } from './SideSignin'
import Checkout from './CheckOut'



const Allroutes = () => {
  return <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/sidesignin' element={<SideSignin/>} />
    <Route path='/menupage' element={<MenuPage/>}/>
    <Route path='servicepage' element={<ServicesPage/>}/>
    <Route path='/aboutuspage' element={<AboutUsPage/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
  </Routes>
}

export default Allroutes