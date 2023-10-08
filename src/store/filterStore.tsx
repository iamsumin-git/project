import create from 'zustand';

export interface Ifilters {
  minCost: GLfloat | null;
  maxCost: GLfloat | null;
  noOfBedrooms: number | null;
  noOfBathrooms: number | null;
  Amenities:
    | 'WIFI'
    | 'TV'
    | 'AC'
    | 'KITCHEN'
    | 'PARKING'
    | 'ELEVATOR'
    | 'BUSINESS CENTER'
    | 'PLAYGROUND'
    | 'MOVIE THEATRE'
    | 'PARTY ROOM'
    | null;

  BookingType: 'RENT' | 'SALE' | null;
}

type Store = {
  openModal: boolean;
  filters: Ifilters;
};

type Actions = {
  setOpenModal: (openModal: boolean) => void;
  setFilters: (filters: Ifilters) => void;
};

export const useFilterModalStore = create<Store & Actions>()((set) => ({
  filters: {
    minCost: null,
    maxCost: null,
    noOfBedrooms: null,
    noOfBathrooms: null,
    Amenities: null,
    BookingType: null,
  },
  setFilters: (filters: Ifilters) => set({ filters }),
  openModal: false,
  setOpenModal: (openModal: boolean) => set({ openModal }),
}));
