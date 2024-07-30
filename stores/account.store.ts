import { create } from 'zustand'

export const useAccountStore = create((set) => ({
  accounts: [],
  total: 1,
  page: 1,
  setAccounts: (accounts: any) => set(() => ({ accounts: accounts })),
  setTotal: (total: number) => set(() => ({ total: total })),
  setPage: (page: number) => set(() => ({ page: page })),
}))
