import { create } from "zustand";
import { Session } from "../types";

export const useSession = create((set) => ({
    session: null,
    login: (session: Session) => set(() => ({ session })),
    logout: () => set(() => ({ session: null })),
}));