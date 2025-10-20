import React, { useState } from 'react'
import { useUserdataStore } from './SigninStore';
import { useNavigate } from 'react-router-dom';
export default function Signin() {
  const [customerName , setCustomerName]=useState('');
  const [email , setEmail]=useState('');
  const [age , setAge] =useState('');
  const [location , setLocation] = useState('');
  const data = useUserdataStore((state)=>state.setUserData)
const [message , setMessage] = useState('');
const navigate = useNavigate()

function save(e) {
  if(customerName=='' || email == '')
  {
     e.preventDefault(); // prevent page reload
    setMessage("Please fill all the fields!");
  }
  else{
 e.preventDefault(); // prevent page reload
  data({ customerName, email });
  alert("Signed up successfully Please Order again!");
  // navigate('/orders');

  
  }

  
 
}

  return (
  <div className='border  w-screen h-screen text-center '>
    <h1 className='h-30 absolute w-screen flex justify-center items-center font-extrabold text-4xl'>Sign up</h1>
    <div className=' w-screen h-150 flex justify-center items-center'>
      <form action="">
        <label htmlFor="">Name : <input type="text" placeholder='Your name' className='border p-2 w-50 mb-5' onChange={(e)=>{setCustomerName(e.target.value)}} /></label><br />
        <label htmlFor="">Email :&nbsp; <input type="email" placeholder='Your Email ID' className='border p-2 w-50 mb-5'  onChange={(e)=>{setEmail(e.target.value)}} /></label><br />
        <label htmlFor="">Age :&nbsp;&nbsp;&nbsp; <input type="number" placeholder='Age' className='border p-2 w-50 mb-5'  onChange={(e)=>{setAge(e.target.value)}}  /></label><br />
        <label htmlFor="">Delivery Location : <textarea name="" id="" placeholder='Your Address' className='border p-2 w-50'  onChange={(e)=>{setLocation(e.target.value)}} ></textarea></label><br />
        <button onClick={(e)=>save(e)  }  className='border p-2 w-3xs font-bold rounded-3xl mt-5'>Submit</button>
     <h1 className='mt-5 text-red-500'>{message}</h1>
      </form>
     
    </div>
    </div>
  )
}

