import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

import { Iroom } from '@/store/flatStore';

import { Comment } from '@/types/comment';

interface ListingStore {
  gallery: Iroom[];
  comments: Comment[];
  setComments: (comments: Comment[]) => void;
  setGallery: (gallery: Iroom[]) => void;
  //
  refreshCount: number;
  refresh: () => void;
}

const useListingStoreBase = create<ListingStore>((set) => ({
  gallery: [],
  comments: [],
  setComments: (comments) => set(() => ({ comments })),
  //
  refreshCount: 0,
  refresh: () => {
    set((state) => ({ refreshCount: state.refreshCount + 1 }));
  },

  setGallery: (gallery: Iroom[]) => set({ gallery: [...gallery] }),
}));

const useListingStore = createSelectorHooks(useListingStoreBase);

export default useListingStore;
