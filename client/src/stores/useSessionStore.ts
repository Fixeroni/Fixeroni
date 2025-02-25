import { create } from "zustand";
import { Session } from "../types";

export const useSessionStore = create((set) => ({
    session: null,
    login: () => set((state: Session) => ({ session: state }))
}));