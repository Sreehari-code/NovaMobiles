import React, { useEffect, useState } from 'react'
import { useAdminStore } from './AdminToCustomerStorage'
import { Link, useNavigate } from 'react-router-dom'
import { useAdminLoginStore } from './LogincheckStore'
import { useCustomerStore } from './CustomerToAdminStorage'
import { useUserdataStore } from './SigninStore'
// import logo from '../assets/logo.png'

export default function Admin() {
  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const setUser = useAdminStore((state) => state.setUser)
  const setAdmin = useCustomerStore((state)=> state.setAdmin)
  const navigate = useNavigate();
    const [orderList, setOrderList] = useState([])

   const products = useCustomerStore((state) => state.products);
   const removeAdminProduct = useCustomerStore((state) => state.removeAdminProduct)
 const  setMessage = useCustomerStore((state)=>state.setMessage)

 const username = useUserdataStore((state) => state.username);

useEffect(() => {
  if (!Array.isArray(products)) return;
  setOrderList(products);
}, [products]);


  //Adding Products
  function add() {
    if (!img || !name) return alert('Image and Product Name required')
    setUser({ img, name, about })
    setImg(''); setName(''); setAbout(''); // clear inputs
  }

   function filtercontent(indextoremove)
   {
    setMessage("Delivered!");
    setOrderList(orderList.filter((item, index) => index !== indextoremove))
       removeAdminProduct(indextoremove);
   }

  return (
    < >
      <h1 className='text-4xl font-extrabold text-center absolute w-screen pt-10 '>Welcome Admin</h1>
      <div className=' flex   justify-center items-center gap-30 flex-col border h-fit pt-40 pb-20'>

        <div className='w-fit border p-10 text-center rounded-3xl '>
          <h1 className='p-5 font-extrabold text-3xl'>Add Product</h1>
          <input type="text" placeholder='ImageUrl' value={img} onChange={(e) => setImg(e.target.value)} className=' pl-5 border text-lg mb-5' /> <br />
          <input type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} className=' pl-5 border text-lg mb-5' /> <br />
          <textarea  placeholder='About Product' value={about} onChange={(e)=>setAbout(e.target.value)} className=' pl-5 border w-58 text-lg mb-10 '></textarea> <br />
          {/* <input type="text" placeholder='About Product' value={about} onChange={(e) => setAbout(e.target.value)} className=' pl-5 border text-lg mb-5' /> <br /> */}
          <button onClick={add} className='border p-2 w-3xs font-bold rounded-3xl mb-5'>Add</button><br />
        </div>

  <h1 className='font-extrabold text-4xl '>Orders</h1>

        <div className=' w-screen flex-wrap flex h-fit gap-30  pl-10'>
        
          {
      orderList.map((item, index) => (
            <div key={index} className='ml-10 mr-10  w-30 h-fit text-center shadow-xl'>

             
                <img src={item.img} alt={item.productName} className='w-20 h-fit object-cover' />
             
                 <h1>{item.name}</h1>
                 <p>Ordered by {username}</p>
                <button onClick={() => filtercontent(index)}  className='border p-1 bg-green-500'>Approve</button>
                  
            </div>
          ))
        }
          
        </div>
      </div>
    </>
  )
}
