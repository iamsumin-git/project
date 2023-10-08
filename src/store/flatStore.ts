/* eslint-disable @typescript-eslint/no-explicit-any */
import create from 'zustand';
// import { persist,  } from 'zustand/middleware'
import { persist } from 'zustand/middleware';

export interface Iamenities {
  id: number;
  name: string;
  flatType: number[];
  checked: boolean;
}
export type roomType = 'room' | 'kitchen' | 'bathroom' | 'other';

export interface Iroom {
  id: string;
  name: string;
  photos: string[];
  remark?: string;
  roomType: roomType;
}

export interface Ipolicies {
  id: number;
  name: string;
  flatType: number[];
  checked: boolean;
}

export interface Ibasic {
  room?: number;
  bathroom?: number;
  kitchen: number;
}

export type Negotiability = 'Negotiable' | 'Non-Negotiable';

export interface Icosts {
  currency: string;
  negotiable?: Negotiability;
  purchaseCost?: number | null | undefined;
  monthlyCost?: number | null | undefined;
  yearlyCost?: number | null | undefined;
  mortgagePayments?: number | null | undefined;
  utilityCost?: number | null | undefined;
  insuranceCost?: number | null | undefined;
  propertyTax?: number | null | undefined;
  internetCost?: number | null | undefined;
  parkingFee?: number | null | undefined;
  petFee?: number | null | undefined;
  communalFacilityFee?: number | null | undefined;
  cleaningFee?: number | null | undefined;
  homeImprovement?: number | null | undefined;
  furnitureAppliances?: number | null | undefined;
  legalFees?: number | null | undefined;
  movingCost?: number | null | undefined;
  securitySystem?: number | null | undefined;
  homeOfficeSetup?: number | null | undefined;
  maintenanceRepairs?: number | null | undefined;
  otherCost?: number | null | undefined;
}

export interface IcontactAndLocation {
  //agent info
  sellerCountry: string;
  sellerCity: string;
  sellerEmail: string;
  sellerContact: string;

  //flat details
  flatCountry: string;
  flatCity: string;
  flatStreet1: string;
  flatStreet2: string;
  flatGeo: number[];
}

// store part
type Store = {
  purpose: 'sell' | 'rent';
  flatTypes: number[];
  flatGeo: GLfloat[];
  flatMapLocation: string;

  buildingAmenities: Array<Iamenities>;
  flatAmenities: Array<Iamenities>;
  flatPolicies: Array<Iamenities>;

  gallery: Array<Iroom>;

  costs: Icosts;

  basics: Ibasic;

  contactAndLocation: IcontactAndLocation;
  //not used here
  steps: number;
  openAppModal: boolean;
};

type Actions = {
  setPurpose: (purpose: 'sell' | 'rent') => void;
  setFlatTypes: (flatIds: number[]) => void;
  setFlatGeo: (flatgeo: GLfloat[]) => void;
  setFlatMapLocation: (type: string) => void;

  setBuildingAmenities: (amenities: Array<Iamenities>) => void;
  setFlatAmenities: (amenities: Array<Iamenities>) => void;
  setFlatPolicies: (amenities: Array<Iamenities>) => void;

  setGallery: (gallery: Array<Iroom>) => void;

  setCosts: (costs: Icosts) => void;

  setBasic: (basics: Ibasic) => void;

  setContactAndLocation: (contact: IcontactAndLocation) => void;

  setSteps: (steps: number) => void;
  setOpenAppModal: (open: boolean) => void;
  reset: () => void;
};

export const useFlatStore = create<Store & Actions>()(
  persist(
    (set) => ({
      purpose: 'rent',
      flatTypes: [1],
      flatGeo: [0.0, 0.0],
      buildingAmenities: [],
      flatAmenities: [],
      flatPolicies: [],
      gallery: [],

      flatMapLocation: '',

      costs: { currency: '$' },
      basics: { room: 0, bathroom: 0, kitchen: 0 },

      contactAndLocation: {
        sellerCountry: '',
        sellerCity: '',
        sellerEmail: '',
        sellerContact: '',
        flatCountry: '',
        flatCity: '',
        flatStreet1: '',
        flatStreet2: '',
        flatGeo: [],
      },

      steps: 1,
      openAppModal: false,

      setPurpose: (purpose: 'sell' | 'rent') => set({ purpose }),
      setFlatTypes: (flatTypes: number[]) => set({ flatTypes }),
      setFlatGeo: (flatgeo: GLfloat[]) => set({ flatGeo: flatgeo }),

      setFlatMapLocation: (l: string) => set({ flatMapLocation: l }),

      setBuildingAmenities: (amenities: Array<Iamenities>) =>
        set({ buildingAmenities: [...amenities] }),
      setFlatAmenities: (amenities: Array<Iamenities>) =>
        set({ flatAmenities: [...amenities] }),

      setGallery: (gallery: Array<Iroom>) => set({ gallery: [...gallery] }),

      setFlatPolicies: (policies: Array<Ipolicies>) =>
        set({ flatPolicies: [...policies] }),

      setCosts: (costs: Icosts) => set({ costs }),
      setBasic: (basic: Ibasic) => set({ basics: basic }),

      setContactAndLocation: (ContactAndLocation: IcontactAndLocation) =>
        set({ contactAndLocation: ContactAndLocation }),

      setSteps: (steps: number) => set({ steps }),
      setOpenAppModal: (openAppModal: boolean) => set({ openAppModal }),
      reset: () =>
        set({
          flatTypes: [1],
          buildingAmenities: [],
          flatAmenities: [],
          flatPolicies: [],
          gallery: [],
          costs: { currency: 'NPR' },
          basics: { room: 0, bathroom: 0, kitchen: 0 },
          contactAndLocation: {
            sellerCountry: '',
            sellerCity: '',
            sellerEmail: '',
            sellerContact: '',
            flatCountry: '',
            flatCity: '',
            flatStreet1: '',
            flatStreet2: '',
            flatGeo: [],
          },
        }),
    }),
    {
      name: 'flat-store',
    }
  )
);
