// useLoginStore.ts
import { create } from "zustand";

type LoginContent = "login" | "register";

interface LoginStore {
  content: LoginContent;
  setContent: (value: LoginContent) => void;
}

export const useLoginStore = create<LoginStore>((set) => ({
  content: "login", // default value
  setContent: (value) => set({ content: value }),
}));
