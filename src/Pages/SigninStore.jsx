import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserdataStore = create(

    (set) => ({
      username: '',
      pass: '',
      setUserData: (user) => set({ username: user.customerName, pass: user.email }),
    }),
    { name: 'user-data-storage' }
  
)
