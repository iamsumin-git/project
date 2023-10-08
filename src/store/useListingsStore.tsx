import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

import { Listing } from '@/types/listing';

interface ActiveFilter {
  label: string;
  value: number;
}
interface ListingsStore {
  listings: Listing[];
  activeTypeFilter: ActiveFilter | null;
  setListings: (listings: Listing[]) => void;
  setTypeFilter: (type: ActiveFilter | null) => void;

  extraFilterActive: boolean;
  // filter data
  query: string;
  purpose: 'rent' | 'sell';
  minPrice: number;
  maxPrice: number;
  bedrooms: number;
  bathrooms: number;
  kitchen: number;

  setQuery: (type: string) => void;

  setPurpose: (type: 'sell' | 'rent') => void;
  setMinPrice: (type: number) => void;
  setMaxPrice: (type: number) => void;
  setBedrooms: (type: number) => void;
  setBathrooms: (type: number) => void;
  setKitchen: (type: number) => void;

  setExtraFiilterActive: (active: boolean) => void;

  //
  refreshCount: number;
  refresh: () => void;
}

const useListingsStoreBase = create<ListingsStore>((set) => {
  // const router=useRouter()
  return {
    listings: [],
    // filter
    query: String(''),

    minPrice: 0,
    maxPrice: 0,
    bedrooms: 0,
    bathrooms: 0,
    kitchen: 0,
    purpose: 'rent',

    activeTypeFilter: null,
    setListings: (listings) => set(() => ({ listings })),
    setTypeFilter: (type) => set(() => ({ activeTypeFilter: type })),

    // filter
    setQuery: (query) => set(() => ({ query: query })),

    setPurpose: (purpose) => set(() => ({ purpose: purpose })),

    setMinPrice: (price) => set(() => ({ minPrice: price })),
    setMaxPrice: (price) => set(() => ({ maxPrice: price })),
    setBedrooms: (room) => set(() => ({ bedrooms: room })),
    setBathrooms: (room) => set(() => ({ bathrooms: room })),
    setKitchen: (kitchen) => set(() => ({ kitchen: kitchen })),

    extraFilterActive: false,
    setExtraFiilterActive: (active) =>
      set(() => ({ extraFilterActive: active })),

    //

    refreshCount: 0,
    refresh: () => {
      set((state) => ({ refreshCount: state.refreshCount + 1 }));
    },
  };
});

const useListingsStore = createSelectorHooks(useListingsStoreBase);

export default useListingsStore;
