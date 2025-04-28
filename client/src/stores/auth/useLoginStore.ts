// useLoginStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

export type LogContent =
| "login"
| "register"
| "Client"
| "ArtisantA"
| "ArtisantB"
| "Login/RegCode";

interface LoginStore {
  content: LogContent;
  setContent: (value: LogContent) => void;
  steps: number;
  setSteps: (step: number) => void;
}

export const useLoginStore = create<LoginStore>()(
  persist(
    (set) => ({
      content: "login", // default value
      setContent: (value) => set({ content: value }),
      steps: 1,
      setSteps: (step) => set({ steps: step }),
    }),
    {
      name: "login-store", // Key in localStorage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
 //mmmmmm