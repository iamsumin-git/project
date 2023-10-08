import React from 'react';

import { AllFlatTypes } from '@/datas/flatTypes';

import useListingsStore from '@/store/useListingsStore';

export default function FlatTypeSelectorOptions() {
  const { activeTypeFilter, setTypeFilter } = useListingsStore();
  const flatTypes1 = AllFlatTypes.slice(0, 6);
  const flatTypes2 = AllFlatTypes.slice(6);

  // TODO: scroll horizontally for flat types on small devices
  return (
    <div className='mx-auto space-y-4'>
      <div className='flex w-full flex-wrap justify-center gap-4 overflow-x-auto text-center'>
        {flatTypes1.map((type, index) => {
          const isActiveFilter = activeTypeFilter?.label === type.label;
          return (
            <div
              onClick={() => {
                if (isActiveFilter) setTypeFilter(null);
                else {
                  setTypeFilter({
                    label: type.label,
                    value: type.id,
                  });
                }
              }}
              key={index}
              className={`${
                isActiveFilter ? 'bg-[#101820]' : 'bg-primary-light'
              } flex  h-[25px] w-auto cursor-pointer flex-col justify-center rounded-[20px] px-4 text-center align-middle text-xs text-white hover:bg-[#101820] md:h-[36px] md:text-sm`}
            >
              {type?.label}
            </div>
          );
        })}
      </div>
      {/* <div className='flex w-full flex-wrap justify-center gap-4 overflow-x-auto text-center'>
        {flatTypes2.map((type, index) => {
          const isActiveFilter = activeTypeFilter?.label === type.label;
          return (
            <div
              onClick={() => {
                if (isActiveFilter) setTypeFilter(null);
                else {
                  setTypeFilter({
                    label: type.label,
                    value: type.id,
                  });
                }
              }}
              key={index}
              className={`${
                isActiveFilter ? 'bg-[#101820]' : 'bg-primary-light'
              } flex  h-[25px] w-auto cursor-pointer flex-col justify-center rounded-[20px] px-4 text-center align-middle text-xs text-white hover:bg-[#101820] md:h-[36px] md:text-sm`}
            >
              {type?.label}
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
