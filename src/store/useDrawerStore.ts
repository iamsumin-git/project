import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

interface DrawerStore {
  isOpen: boolean | undefined;
  native: boolean | undefined;
  open: () => void;
  close: () => void;
  setNative: (native: boolean) => void;
}

const useDrawerStoreBase = create<DrawerStore>((set) => ({
  isOpen: false,
  native: true,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setNative: (native) => set({ native }),
}));

const useDrawerStore = createSelectorHooks(useDrawerStoreBase);

export default useDrawerStore;
