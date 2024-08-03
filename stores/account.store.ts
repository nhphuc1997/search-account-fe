import { create } from 'zustand'

export const useAccountStore = create((set) => ({
  accounts: [],
  account: {},
  loading: false,
  setAccounts: (accounts: any) => set(() => ({ accounts: accounts })),
  setAccount: (account: any) => set(() => ({ account: account })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading }))
}))
