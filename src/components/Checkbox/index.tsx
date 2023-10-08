import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

interface Iprops {
  name: string;
  control: Control;
  label: React.ReactElement | string;
}

const Checkbox = (props: Iprops) => {
  const { name, control, label } = props;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            className='flex items-center '
            control={<MuiCheckbox {...field} />}
            label={label}
          />
        )}
      />
    </div>
  );
};

export default Checkbox;
