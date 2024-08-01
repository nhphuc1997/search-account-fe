import { create } from 'zustand'

export const useAccountStore = create((set) => ({
  accounts: [],
  loading: false,
  setAccounts: (accounts: any) => set(() => ({ accounts: accounts })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading }))
}))
