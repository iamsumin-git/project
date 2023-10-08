import {
  FormLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from '@mui/material';
import { Controller } from 'react-hook-form';

interface Iprops {
  label: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  options: Array<number | string>;
}

type Props = SelectProps & Iprops;

export const Select = (props: Props) => {
  return (
    <>
      <section>
        <div>
          <FormLabel className=' text-text-secondary-default text-[14px] font-medium leading-[150%]'>
            {props.label}
          </FormLabel>
        </div>
        <div>
          <Controller
            control={props.control}
            name={props.name}
            render={({ field: { ...field } }) => {
              return (
                <>
                  <MuiSelect
                    labelId='demo-simple-select-autowidth-label'
                    id='demo-simple-select-autowidth'
                    fullWidth
                    size='small'
                    placeholder='Ayush'
                    // renderValue={}
                    {...field}
                  >
                    {props.options.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </MuiSelect>
                </>
              );
            }}
          />{' '}
        </div>
      </section>
    </>
  );
};

// Select.displayName = 'T'
export default Select;
