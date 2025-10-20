import React, { useEffect, useRef, useState } from 'react';
import ImageSlider from '../Components/Imageslider';
import { useAdminStore } from './AdminToCustomerStorage';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAdminLoginStore } from './LogincheckStore';

export default function Home() {
  const searchbar = useRef();
  const navigate = useNavigate()
  const products = useAdminStore((state) => state.products)
  const removeProduct = useAdminStore((state) => state.removeProduct)
  const password = useAdminLoginStore()
  const [itemList, setItemList] = useState([])
  const [buttonText, setButtontext] = useState('');
  const [search, setSearch] = useState('');

//Searchbar filter
  const filtercard = itemList.filter((item) => (item.productName.toLowerCase()).includes(search.toLowerCase()))

//Appending Products from Admin Storage
  useEffect(() => {
    searchbar.current.focus();
    if (!products) return
    setItemList((prev) => [
      ...prev,
      ...products.filter(
        (p) => !prev.some((prevItem) => prevItem.productName === p.productName)
      ),
    ])
  }, [products])

//Showing Remove Button
  useEffect(() => {
    if (password.password == 1234) {
      setButtontext("{Remove}");
    }
  }, [password])


  //Remove Button functionality
  function filtercontent(indextoremove) {
    if (password.password == 1234) {
      setItemList(itemList.filter((item, index) => index !== indextoremove))
      removeProduct(indextoremove)
    }
    else {
      navigate('/login');
    }
  }

  return (
    <div className='overflow-x-hidden'>
      <ImageSlider />
      <div className='flex w-screen justify-center mt-10'>
        <input type="search" placeholder='🔍Search' className='border w-xl h-10 pl-5' ref={searchbar} onChange={(event) => { setSearch(event.target.value) }} />
      </div>


      <div className='w-screen  flex h-fit flex-wrap gap-30  mt-20 mb-20 justify-center '>
        {
          filtercard.map((item, index) => (
            <div key={index} className='ml-10 mr-10  w-2xs h-fit text-center shadow-xl'>

              <Link
                to={`/product/${index}`}
                state={{
                  img: item.img,
                  name: item.productName,
                  about: item.aboutProduct,
                }}
              >
                <img src={item.img} alt={item.productName} className='w-full h-fit object-cover' />
              </Link>
                 <h1>{item.productName}</h1>
               
              <button onClick={() => filtercontent(index)} className=' p-2 '>{buttonText}</button>
            </div>
          ))
        }
      </div>




    </div>
  )
}


// () => filtercontent(index)