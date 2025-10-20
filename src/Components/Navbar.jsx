import React, { useEffect } from 'react'
import logo from '../assets/Mainlogo.png'
// import { useAdminLoginStore } from '../Pages/LogincheckStore'
import { Link, useNavigate } from 'react-router-dom'
import { useAdminLoginStore } from '../Pages/LogincheckStore'
import adminLogo from '../assets/Adminlogo.png'
import Home from '../assets/Home.png';
import cart from '../assets/cart.png'
import about from'../assets/about.png'
import contact from '../assets/contact.png';
import order from '../assets/download.jpeg';
import Orders from '../Pages/Orders'
export default function Navbar() {
  const navigate = useNavigate()
  const check = useAdminLoginStore();



  //Condition for Routing to Admin Pannel
  function checking() {
    if (check.password == '1234') {
      navigate('/admin')
    }
    else {
      navigate('/login')
    }
  }

  return (
    <div >
      <nav className='flex  items-center justify-between pr-10 w-screen border-b-1 h-20'>
        <img src={logo} alt="" className='w-75 ' />

        <ul className='flex gap-10 items-center'>
          <li className="cursor-pointer relative  border-transparent "> <Link to='/'><img src={Home} alt="" className='w-10 ' /></Link> </li>
          <li className="cursor-pointer relative  border-transparent "><Link to='/cart'><img src={cart} alt="" className='w-23' /></Link></li>
          <li><Link to='/orders'><img src={order}  className='w-15'  alt="" /></Link></li>
          <li className="cursor-pointer relative  border-transparent "> <Link to='/about'> <img src={about} alt="" className='w-18 ' /> </Link></li>
          <li className="cursor-pointer relative  border-transparent hover:cursor-pointer"><button onClick={() => checking()}> <img src={adminLogo} alt="" className='w-20' /> </button></li>
          {/* <li className="cursor-pointer relative border-b-2 border-transparent hover:border-black transition-all duration-1000ms"><Link to='/login'>Login</Link></li> */}
        </ul>
      </nav>

    </div>
  )
}
