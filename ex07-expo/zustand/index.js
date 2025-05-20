import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create(
  persist(
    (set) => ({
      isEnableView: false,
      toggleIsEnableView: () =>
        set((state) => ({ isEnableView: !state.isEnableView })),
    }),
    {
      name: "ex07-global-config",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
