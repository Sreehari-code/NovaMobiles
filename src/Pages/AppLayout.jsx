import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Admin from './Admin'
import Login from './Login'
import Home from './Home'
import ProductShowCase from './ProductShowCase'
import Cart from './Cart'
import Signin from './Signin'
import Orders from './Orders'
import About from './About'
export default function AppLayout() {
  return (
    <>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path="/product/:id" element={<ProductShowCase />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/about' element={<About/>}/>

        </Route>


      </Routes>
    </>
  )
}
