import { create } from "zustand";
import { persist } from "zustand/middleware";

// export type dashboardContent ="dashboardPage" | "FindPro";

export type dashboardContent = 
  | "Dashboard" 
  | "Find Pro" 
  | "Schedule" 
  | "Messages" 
  | "Orders" 
  | "Favorite";


type DashboardState = {
  content: dashboardContent;
  setContent: (value: dashboardContent) => void;
};

export const useDashboardStore = create<DashboardState>()(
  persist( (set) => ({
  content: "Dashboard", // Default state
  setContent: (value) => set({ content: value }),
}),{ name: "dashboard-content-storage" }
)
);



