import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAdminStore = create(
  //Store data from Admin 
  persist(
    (set) => ({
      products: [],

      setUser: (admin) =>
        set((state) => ({
          products: [...state.products, { img: admin.img, productName: admin.name, aboutProduct: admin.about }],
        })),

      removeProduct: (index) =>
        set((state) => ({
          products: state.products.filter((_, i) => i !== index),
        })),

    }),
    { name: 'admin-storage' }
  )
)
