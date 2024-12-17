import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Contact from './pages/Contact.jsx'
import Nav from './components/Navigation.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
