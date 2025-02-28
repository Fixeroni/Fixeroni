/*
    A store to track the number of steps in the auth process
*/

import { create } from "zustand";

type State = {
    step: number;
}

type Actions = {
    incrementStep: () => void;
    decrementStep: () => void;
    resetStep: () => void;
}

const useSteps = create<State & Actions>((set) => ({
    step: 0,
    incrementStep: () => set((state) => ({ step: state.step + 1 })),
    decrementStep: () => set((state) => ({ step: state.step - 1 })),
    resetStep: () => set({ step: 0 }),
}));