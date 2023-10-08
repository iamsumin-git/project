import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup as MUIRadioGroup,
  RadioGroupProps,
} from '@mui/material';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

interface obj {
  value: string;
  label: string;
}

interface IProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: object;
  options: obj[];
  label?: string;

  // handleRadioChange: any
}

type RadioProps<T extends FieldValues> = RadioGroupProps & IProps<T>;

function RadioGroup<T extends FieldValues>(props: RadioProps<T>) {
  return (
    <>
      <section>
        <div>
          <h2 className=' text-text-secondary-default text-[14px] font-medium leading-[150%]'>
            {props.label}
          </h2>
        </div>
        <div>
          <Controller
            control={props.control}
            name={props.name}
            render={({ field: { ...field } }) => {
              return (
                <>
                  <FormControl>
                    <MUIRadioGroup row {...field}>
                      {props.options.map((option, index) => (
                        <FormControlLabel
                          key={index}
                          className='   leading-[150%] '
                          sx={{ fontWeight: 400, fontSize: '50px' }}
                          value={option.value}
                          label={option.label}
                          control={<Radio />}
                          // onChange={props.handleRadioChange}
                        />
                      ))}
                    </MUIRadioGroup>
                  </FormControl>
                </>
              );
            }}
          />{' '}
        </div>
      </section>
    </>
  );
}

export default RadioGroup;
