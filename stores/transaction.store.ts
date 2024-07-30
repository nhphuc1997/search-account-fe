import { create } from "zustand";

export const useTransactionsStore = create((set) => ({
  transactions: {},
  total: 0,
  page: 1,
  loading: false,
  setTransactions: (transactions: any) => set(() => ({ transactions: transactions })),
  setTotal: (total: any) => set(() => ({ total: total })),
  setPage: (page: any) => set(() => ({ page: page })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading }))
}))
