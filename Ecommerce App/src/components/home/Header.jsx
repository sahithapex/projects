import React from 'react'
import Navbar from './Navbar.jsx'
import Product from '../product/product'
import { ProductProvider } from "../contextApi/contextApi.jsx";
const Header = () => {
  return (
    <div className='main'>
      <Navbar/>
      <h1>hi sahith</h1>
      <ProductProvider>
      <Product />
    </ProductProvider>
    </div>
  )
}

export default Header
