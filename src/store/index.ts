// import { create } from 'zustand';

// interface UserState {
//   user: any;
//   setUser: (user: any) => void;
// }

// export const useStore = create<UserState>((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
// }));

import create from 'zustand';

interface StoreState {
  user: { email: string } | null;
  setUser: (user: { email: string }) => void;
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
