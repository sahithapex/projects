import React,{useState} from 'react'
import Navbar from './Navbar.jsx'
import Product from '../product/product.jsx'
import { ProductProvider } from "../contextApi/contextApi.jsx";
import Sidebar from './Sidebar.jsx'
import './Mainpage.css'

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div >
      <ProductProvider>
      <Navbar/>
      <div className='main'>
      <Sidebar setSelectedCategory={setSelectedCategory} />
        <Product selectedCategory={selectedCategory} />
      
      </div>

    </ProductProvider>
    </div>
  )
}

export default Header
