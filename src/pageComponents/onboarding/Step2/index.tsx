import { useFormContext } from 'react-hook-form';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import Checkbox from '@/components/Checkbox';

const options = [
  {
    key: 'google',
    label: 'Google',
    icon: <FcGoogle />,
  },
  {
    key: 'facebook',
    label: 'Facebook',
    icon: (
      <BsFacebook
        style={{
          color: '#3b5998',
        }}
      />
    ),
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: (
      <BsInstagram
        style={{
          color: '#e1306c',
        }}
      />
    ),
  },
  {
    key: 'twitter',
    label: 'Twitter',
    icon: (
      <BsTwitter
        style={{
          color: '#1DA1F2',
        }}
      />
    ),
  },
];

const Step2 = () => {
  const { control } = useFormContext();

  return (
    <div className=''>
      <h1
        className='text-primary-main text-3xl font-bold
      leading-[150%]'
      >
        From where you came to know about us?{' '}
      </h1>
      <div className='mt-10  flex flex-col'>
        {options.map((item, index) => {
          return (
            <Checkbox
              key={index}
              name={item.key}
              control={control}
              label={
                <div className='mt-1 flex items-center gap-2  text-[20px]'>
                  {item.icon}
                  {'  '}
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

export default Step2;
