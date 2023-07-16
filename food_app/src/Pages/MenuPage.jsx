import React from 'react'
import { ProductList } from '../Components/ProductList'
import { SideBar } from '../Components/SideBar'
import styled from 'styled-components'

export const MenuPage = () => {
  return (
    <DIV>
      <div className='sidebar'>
      <SideBar/>
      </div>
      <div className='productlist'>
      <ProductList/>
      </div>
      
    </DIV>
  )
}
const DIV = styled.div`
  display: flex;

  .sidebar{
    width: 15%;
  }
  .productlist{
    width: 85%;
  }
`