import { AllFlatTypes } from '@/datas/flatTypes';

import { useFlatStore } from '@/store/flatStore';

import { FlatTypeCard } from '@/features/my-flats/cards/FlatTypeCard';

const FlatTypesPage = () => {
  const { flatTypes, setFlatTypes } = useFlatStore();

  const handleCheck = (id: number) => {
    if (flatTypes.includes(id)) {
      const newF = flatTypes.filter((f) => {
        return id != f;
      });
      setFlatTypes(newF);
    } else {
      setFlatTypes([...flatTypes, id]);
    }
  };

  return (
    <div className='m-auto  h-full  w-[80%]'>
      <div className='h-auto w-full pb-9 '>
        {/* <h2 className=' text-primary-main text-[30px] font-bold'>Flat Type</h2> */}
        <h3 className=' text-[18px] font-semibold '>
          You Can Select Multiple Flat Types That Best Describe Your Flat
        </h3>
      </div>
      <div className='flex h-auto w-full  flex-wrap justify-center gap-5 align-middle   '>
        {AllFlatTypes.map((flat) => {
          const isSelected = flatTypes.includes(flat.id);
          return (
            <div
              key={flat.id}
              // className={`${isSelected ? 'bg-slate-400' : ' bg-slate-100'} rounded-md`}
              onClick={() => handleCheck(flat.id)}
            >
              <FlatTypeCard
                label={flat.label}
                checked={isSelected}
                features={flat.features}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlatTypesPage;
