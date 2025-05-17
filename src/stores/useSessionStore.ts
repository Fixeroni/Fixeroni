import { create } from "zustand";
import { Session } from "../types";

type State = {
  session: null | Session;
};

type Action = {
  login: (session: Session) => void;
};

export const useSession = create<State & Action>((set) => ({
  session: null,
  login: (session: Session) => set(() => ({ session })),
  logout: () => set(() => ({ session: null })),
}));
