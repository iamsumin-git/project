import Image from 'next/image';

import { useFlatStore } from '@/store/flatStore';

const purposes = [
  {
    id: 1,
    value: 'sell',
    label: 'Sell My Flat',
    src: '/illustrators/sell.svg',
  },
  {
    id: 2,
    value: 'rent',
    label: 'Rent My Flat',
    src: '/illustrators/rent.svg',
  },
];

const Purpose = () => {
  const { purpose, setPurpose } = useFlatStore();

  const handlePurpose = (purpose) => {
    setPurpose(purpose);
  };
  return (
    <div className='m-auto h-auto w-auto  gap-9 md:flex '>
      {purposes.map((p) => {
        return (
          <div key={p.id} onClick={() => handlePurpose(p.value)}>
            <div
              className={` duration-400 h-[350px] w-[300px] cursor-pointer  rounded-lg hover:bg-slate-200 ${
                purpose == p.value ? 'bg-slate-200' : 'bg-slate-100'
              } text-center shadow-md transition-colors `}
            >
              <div className='relative h-[300px] w-full object-cover'>
                <Image src={p.src} fill alt={p.label} />
              </div>
              <div className='flex flex-col justify-center align-middle'>
                <h3 className=' p-1 text-[30px] font-semibold text-blue-950'>
                  {p.label}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Purpose;
