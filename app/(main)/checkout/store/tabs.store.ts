import { create } from "zustand"

type TabStep = {
    activeTab: number;
} | null

interface TabStepStore {
    tabData: TabStep;
    setActiveTab: (data: number) => void;
}

export const useTabStepStore = create<TabStepStore>((set) => ({
    tabData: { activeTab: 1 },
    setActiveTab: (data) => {
        set({ tabData: { activeTab: data } })
    }
}))