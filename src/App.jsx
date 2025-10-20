import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
