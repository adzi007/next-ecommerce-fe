"use client";

import { create } from "zustand";

interface LoadingBarState {
  isVisible: boolean;
  progress: number;
  start: () => void;
  finish: () => void;
  reset: () => void;
}

export const useLoadingBar = create<LoadingBarState>((set) => {
  let timer: NodeJS.Timeout;

  const start = () => {
    set({ isVisible: true, progress: 10 });
    clearInterval(timer);

    timer = setInterval(() => {
      set((state) => {
        const next = state.progress < 90 ? state.progress + Math.random() * 10 : state.progress;
        return { progress: next };
      });
    }, 200);
  };

  const finish = () => {
    clearInterval(timer);
    set({ progress: 100 });
    setTimeout(() => set({ isVisible: false, progress: 0 }), 300);
  };

  const reset = () => {
    clearInterval(timer);
    set({ isVisible: false, progress: 0 });
  };

  return { isVisible: false, progress: 0, start, finish, reset };
});
