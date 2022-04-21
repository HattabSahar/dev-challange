import create from 'zustand'

export const useUserStore = create(set => ({
  isLoading: true,
  user: null,
  authenticateUser: data => set(() => ({ user: data })),
}))
