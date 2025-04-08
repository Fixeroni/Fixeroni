// useToggleStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ToggleState = {
  isOpen: boolean;
  toggle: () => void;
};

export const useToggleStore = create<ToggleState>()(
   persist(
    (set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}),
{
    name: 'toggle-storage'
  }
) 
);
