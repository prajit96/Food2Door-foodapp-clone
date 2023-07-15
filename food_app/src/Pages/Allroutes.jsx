import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'

const Allroutes = () => {
  return <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Login/>} />
  </Routes>
}

export default Allroutes