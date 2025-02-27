/**
 * A store to find out if we should show the verification page or not
 */

import { create } from "zustand";

const useVerificationStore = create((set) => ({
  showVerification: false,
  setShowVerification: (value: boolean) => set({ showVerification: value }),
}));