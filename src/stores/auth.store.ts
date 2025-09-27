import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
};

type AuthState = {
  user: User | null;
  isHydrated: boolean;
  setHydrated: () => void;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isHydrated: false,
      setHydrated: () => set({ isHydrated: true }),
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    { 
        name: "auth-storage",
        onRehydrateStorage: () => (state) => {
            state?.setHydrated()
        }
    },
  )
);