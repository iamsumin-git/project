import { FormLabel } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import React from 'react';
import { Controller } from 'react-hook-form';

interface Iprops {
  label: string;
  placeholder: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  required?: boolean;
}

const PhoneInput = (props: Iprops) => {
  const { name, control, label } = props;

  return (
    <>
      <div>
        <FormLabel className=' text-primary-main text-[14px] font-semibold leading-[150%]'>
          {label}
        </FormLabel>
      </div>
      <div>
        <Controller
          name={name}
          control={control}
          render={({ field: { ...field } }) => (
            <MuiTelInput
              size='small'
              defaultCountry='NP'
              sx={{ border: '2px solid #B6C2E2', borderRadius: '6px' }}
              fullWidth
              {...field}
            />
          )}
        />
      </div>
    </>
  );
};

export default PhoneInput;
