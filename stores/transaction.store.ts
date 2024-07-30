import { create } from "zustand";

export const useTransactionsStore = create((set) => ({
  transactions: {},
  setTransactions: (transactions: any) => set(() => ({ transactions: transactions }))
}))
