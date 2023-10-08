import { useFormContext } from 'react-hook-form';

import Checkbox from '@/components/Checkbox';

const Options = [
  {
    key: 'buyFlat',
    label: 'Buy a Flat',
  },
  {
    key: 'sellFlat',
    label: 'Sell a Flat',
  },
  {
    key: 'findRoomMate',
    label: 'Find room mates',
  },
  {
    key: 'rentFlates',
    label: 'Rent a Flat',
  },
];

const Step1 = () => {
  const { control } = useFormContext();

  return (
    <div className=''>
      <h1
        className='text-primary-main text-3xl font-bold
      leading-[150%]'
      >
        Tell us about your personal interest for joining Us!{' '}
      </h1>
      <div className='mt-10  flex flex-col'>
        {Options.map((item, index) => {
          return (
            <Checkbox
              key={index}
              name={item.key}
              control={control}
              label={
                <div className='text-base font-semibold leading-[150%] '>
                  {item.label}
                </div>
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Step1;
