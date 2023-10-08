import { FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import { Props } from 'react-select';
import CreatableSelect from 'react-select/creatable';

type myFunction = (inputValue: string, from: string) => void;

interface IProps<T extends FieldValues> extends Props {
  label: string;
  placeholder: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  rules?: object;

  control: Control<T>;
  name: FieldPath<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  isdisabled?: boolean;
  addNew: myFunction;
  helperText?: string;
  error?: boolean;
}

export function CreatableReactSelect<T extends FieldValues>(props: IProps<T>) {
  const {
    control,
    name,
    required,
    options,
    isdisabled,
    rules,
    error,
    helperText,
    addNew,
  } = props;

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
            control={control}
            name={name}
            rules={{ required, ...rules }}
            render={({ field: { ...field } }) => {
              return (
                <>
                  <CreatableSelect
                    value={options?.find(
                      (o: { value: object }) => o.value === field.value
                    )}
                    // className='border-[1.5px] border-[#B6C2E2] peer border-solid rounded  flex focus:border-primary-light-main focus:outline-primary-light-main placeholder-shown:bg-white-default hover:border-primary-light-main hover:bg-white focus-within:border-primary-light-main focus-within:outline-primary-light-main focus-within:bg-white-default relative w-full'

                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        height: '41px',
                        border: '1.5px solid #B6C2E2',
                      }),
                    }}
                    instanceId='long-value-select'
                    defaultValue={{ label: props.placeholder, value: '' }}
                    classNamePrefix='addl-class'
                    options={options}
                    onChange={(name) => field.onChange(name?.value)}
                    isDisabled={isdisabled}
                    isClearable={true}
                    createOptionPosition='last'
                    formatCreateLabel={(inputValue: string) => (
                      <div className='w-full'>
                        <Button fullWidth>Create: {inputValue}</Button>
                      </div>
                    )}
                    onCreateOption={(inputValue) => {
                      addNew(inputValue, name);
                    }}
                  />
                </>
              );
            }}
          />{' '}
        </div>
        {error && (
          <span
            className={`${
              error ? 'text-error-light-200' : 'text-surface-grey '
            } ml-3 text-sm`}
          >
            {helperText}
          </span>
        )}{' '}
      </section>
    </>
  );
}

export default CreatableReactSelect;
