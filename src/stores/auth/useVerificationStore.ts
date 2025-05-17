/**
 * A store to find out if we should show the verification page or not
 */

import { create } from "zustand";

type State = {
  showVerification: boolean;
};

type Action = {
  setShowVerification: (value: boolean) => void;
};

export const useVerificationStore = create<State & Action>((set) => ({
  showVerification: false,
  setShowVerification: (value: boolean) => set({ showVerification: value }),
}));
