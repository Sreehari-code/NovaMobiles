import React, { useState, useEffect } from 'react'
import { useAdminCartStore } from './CartStorage'
import { Link } from 'react-router-dom';

export default function Cart() {
  const CartProduct = useAdminCartStore((state) => state.cartProducts);

  const removeCart = useAdminCartStore((state) => state.removeCart)
  const [itemCartList, setItemCartList] = useState([])

  useEffect(() => {
    if (!Array.isArray(CartProduct)) return
    setItemCartList((prev) => {
      const uniqueItems = CartProduct.filter(
        (p) => !prev.some((prevItem) => prevItem.name === p.name)
      )
      return [...prev, ...uniqueItems]
    })
  }, [CartProduct])

  function filterCart(indexToRemove) {
    setItemCartList((prev) => prev.filter((_, i) => i !== indexToRemove))
    removeCart(indexToRemove)
  }


  return (
    <div className="w-screen flex h-fit flex-wrap gap-10 mt-20 mb-20 justify-center min-h-80">
      {itemCartList.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        itemCartList.map((item, index) => (
          <div
            key={index}
            className="ml-10 mr-10 w-60 h-fit text-center shadow-xl p-4"
          >

  
                 {/* <img src={item.img} alt={item.name} className="w-full object-cover" />
                  */}
        
              <Link
                        to={`/product/${index}`}
                        state={{
                          img: item.img,
                          name: item.name,
                          about: item.about,
                        }}
                      >
                        <img src={item.img} alt={item.productName} className='w-full h-fit object-cover' />
                      </Link>

           
            <h1>{item.name}</h1>
             
            <button
              onClick={() => filterCart(index)}
              className="p-2 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  )
}
