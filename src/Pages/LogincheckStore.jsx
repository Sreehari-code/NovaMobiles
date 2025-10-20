import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAdminLoginStore = create(
  (set) => ({
    username: "",
    password: "",
    setUserPassword: (admin) =>
      set((state) => ({ username: admin.username, password: admin.password })),
  }),
  { name: 'admin-login-storage' }

)
