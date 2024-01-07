import { create } from "zustand";
import { useSharedSlice } from "./slices/shared.slice";

export const useStore = create<SharedStore>((...a) => ({
  ...useSharedSlice(...a),
  //   ...createFishSlice(...a),
}));
