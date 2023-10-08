import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

interface LightBoxStore {
  images: string[];
  setImages: (images: string[]) => void;
  selectedIndex: number;
  setPhotoIndex: (index: number) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const useLightBoxStoreBase = create<LightBoxStore>((set) => ({
  images: [],
  selectedIndex: 0,
  isOpen: false,
  setImages: (images) => set(() => ({ images })),
  setPhotoIndex: (index) => set(() => ({ selectedIndex: index })),
  setIsOpen: (open) => set(() => ({ isOpen: open })),
}));

const useLightBoxStore = createSelectorHooks(useLightBoxStoreBase);

export default useLightBoxStore;
