import TextField from '@mui/material/TextField';
import { countries } from 'countries-list';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

const countryData: { label: any; value: string }[] = Object.keys(countries).map(
  (code) => ({
    value: code,
    label: (
      <div className='flex items-center justify-between' key={code}>
        <span className='ml-2'>{countries[code].name}</span>
        <span>{countries[code].emoji}</span>
      </div>
    ),
  })
);

const Step3 = () => {
  const { control } = useFormContext();

  return (
    <div className=''>
      <h1 className='text-primary-main text-3xl font-bold leading-[150%]'>
        Please say us where are you from?{' '}
      </h1>

      <div className='mt-10  flex flex-col'>
        <label
          htmlFor='country'
          className='mb-2 text-base font-semibold leading-[150%]'
        >
          Select Country
        </label>

        <Controller
          name='country'
          control={control}
          render={({ field }) => (
            <Select {...field} options={countryData} name='countries' />
          )}
        />

        <label
          htmlFor='city'
          className='mb-2 mt-5 text-base font-semibold leading-[150%]'
        >
          City
        </label>
        <Controller
          name='city'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id='city'
              variant='standard'
              className='w-full'
              placeholder='Enter your city name'
            />
          )}
        />
      </div>
    </div>
  );
};

export default Step3;
