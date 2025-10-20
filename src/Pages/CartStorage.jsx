import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAdminCartStore = create(
  persist(
    (set) => ({
      cartProducts: [],

      setCart: (product) =>
        set((state) => ({
          cartProducts: [...state.cartProducts, product],
        })),

      removeCart: (index) =>
        set((state) => ({
          cartProducts: state.cartProducts.filter((_, i) => i !== index),
        })),
    }),
    { name: 'admin-cart-storage' }
  )
)
