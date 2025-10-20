import React from 'react'
import { useState } from 'react';
import { useCustomerStore } from './CustomerToAdminStorage';
import { useEffect } from 'react';

export default function Orders() {
        const [orderList, setOrderList] = useState([])
          const products = useCustomerStore((state) => state.products);
           const removeAdminProduct = useCustomerStore((state) => state.removeAdminProduct)
           const setmessage = useCustomerStore((state)=>state.setMessage);
           useEffect(() => {
             if (!Array.isArray(products)) return;
             setOrderList(products);
           }, [products]);

const [message , setMessage] = useState('Pending...');
           
//    function filtercontent(indextoremove)
//    {
//     setOrderList(orderList.filter((item, index) => index !== indextoremove))
//        removeAdminProduct(indextoremove);
//    }
useEffect(()=>{
    setInterval(()=>{
setMessage("Delivered!");
    },5000)

} , [])
console.log(orderList)

  return (
    <div>

        <div className=' w-screen flex-wrap flex h-fit gap-30  pl-10 justify-center mt-20 min-h-100'>
        
          { (orderList.length>0) ?
      orderList.map((item, index) => (
            <div key={index} className='ml-10 mr-10  w-30 h-fit text-center shadow-xl'>

             
                <img src={item.img} alt={item.productName} className='w-20 h-fit object-cover' />
             
                 <h1>{item.name}</h1>
                 <h1>{message}</h1>
                {/* <button onClick={() => filtercontent(index)}  className='border p-1 bg-green-500'>Approve</button> */}
                  
            </div>
          )):
          <h1>No Orders yet!</h1>
        }
          
        </div>

    </div>
  )
}
