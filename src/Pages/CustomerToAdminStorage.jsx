import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCustomerStore = create(
  //Store data from Admin 
  persist(
    (set) => ({
      products: [],
      messgae : '',
      setAdmin: (admin) =>
        set((state) => ({
         products: [...state.products, { img: admin.img, name: admin.name, about: admin.about }],

        })),

      removeAdminProduct: (index) =>
        set((state) => ({
          products: state.products.filter((_, i) => i !== index),
        })),
        
        setMessage: (admin)=>
          set((state) => ({
            message :admin.message,

          }))

    }),
    { name: 'customer-storage' }
  )
)
