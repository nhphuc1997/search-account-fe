import { create } from "zustand";

export const useProfileStore = create((set) => ({
  profile: {},
  setProfile: (profile: any) => set(() => ({ profile: profile }))
}))
