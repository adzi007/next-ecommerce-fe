import { create } from "zustand"

type User = {
    id: string;
    name: string;
} | null

interface UserStore {
    user: User;
    setUser: (data: User) => void;
}

export const UseUserStore = create<UserStore>( (set) => ({
    user: null,
    setUser: (data) => {
        set({ user: data })
    }
}) )