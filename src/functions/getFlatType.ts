import { AllFlatTypes } from '@/datas/flatTypes';

export const getFlatTypes = (id: number) => {
  return AllFlatTypes[id].label;
};
