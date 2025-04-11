// useToggleStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ToggleState = {
  isOpen: boolean;
  isSchedule: boolean;
  isNotification: boolean;
  toggle: () => void;
  schedule: () => void;
  notification: ()=> void;
};

export const useToggleStore = create<ToggleState>()(
   persist(
    (set) => ({
  isOpen: false,
  isNotification: false,
  isSchedule: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  notification: () =>set((state)=>({isNotification: !state.isNotification})),
  schedule: () =>set((state)=>({isSchedule: !state.isSchedule})),
}),
{
    name: 'toggle-storage'
  }
) 
);
