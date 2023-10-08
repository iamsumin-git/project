import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

interface ModalStore {
  fullView: boolean | undefined;
  toggleFullView: () => void;
}

const useModalStoreBase = create<ModalStore>((set) => ({
  fullView: false,
  toggleFullView: () => {
    set((state) => ({ fullView: !state.fullView }));
  },
}));

const useModalStore = createSelectorHooks(useModalStoreBase);

export default useModalStore;
