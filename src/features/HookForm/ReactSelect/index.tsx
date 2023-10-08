import { FormLabel } from '@mui/material';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import Select, { Props } from 'react-select';

interface IProps<T extends FieldValues> extends Props {
  label?: string;
  placeholder: string;

  control?: Control<T>;
  name: FieldPath<T>;
  rules?: object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  isdisabled?: boolean;

  helperText?: string;
  error?: boolean;
}

export function ReactSelect<T extends FieldValues>(props: IProps<T>) {
  const {
    control,
    name,
    required,
    options,
    isdisabled,
    rules,
    error,
    helperText,
  } = props;
  // const { errors } = useFormState<T>({ control, name })

  // console.log('errors from text field', errors)
  return (
    <>
      <section>
        <div>
          <FormLabel className=' text-primary-main text-[14px] font-semibold leading-[150%]'>
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
                  <Select
                    value={options?.find(
                      (o: { value: object }) => o.value === field.value
                    )}
                    // className='border-[1.5px] border-[#B6C2E2] peer border-solid rounded  flex focus:border-primary-light-main focus:outline-primary-light-main placeholder-shown:bg-white-default hover:border-primary-light-main hover:bg-white focus-within:border-primary-light-main focus-within:outline-primary-light-main focus-within:bg-white-default relative w-full'

                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        minHeight: '41px',
                        border: '2px solid #B6C2E2',
                        borderRadius: '6px',
                      }),
                    }}
                    instanceId='long-value-select'
                    defaultValue={{ label: props.placeholder, value: '' }}
                    classNamePrefix='addl-class'
                    options={options}
                    onChange={(name) => field.onChange(name?.value)}
                    isDisabled={isdisabled}
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

export default ReactSelect;
