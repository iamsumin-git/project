import InputUnstyled, { InputProps } from '@mui/base/Input';
import * as React from 'react';

export type InputProp = InputProps & {
  label?: string;
  helperText?: string;
  error?: boolean;
};

const Input = React.forwardRef(function CustomInput(
  props: InputProp,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    label,
    slots,
    error,
    startAdornment,
    endAdornment,
    slotProps,
    helperText,
    ...others
  } = props;
  return (
    <div>
      <div className='relative'>
        <InputUnstyled
          // {...slotProps}
          slotProps={{
            root: {
              className: `border-[2px] border-[#B6C2E2] ${
                label ? 'mt-5' : 'mt-0'
              } peer border-solid rounded focus:border-primary-light-main flex focus:border-primary-light-main focus:outline-primary-light-main placeholder-shown:bg-white-default hover:border-primary-light-main hover:bg-white focus-within:border-primary-light-main focus-within:outline-primary-light-main focus-within:bg-white-default relative w-full ${
                error ? 'border-error-light-200' : ''
              }`,
            },
            ...slots,

            input: {
              ...(slotProps?.input ?? {}),
              className: `bg-surface-default placeholder-shown:bg-white-default rounded focus:bg-white-default w-full ${
                startAdornment
                  ? 'pl-10 pr-4'
                  : endAdornment
                  ? 'pr-10 pl-2'
                  : 'px-2'
              }  py-2 border-0 outline-0 placeholder:font-medium placeholder:text-sm placeholder:text-surface-grey `,
            },
          }}
          {...others}
          {...(startAdornment && {
            startAdornment: (
              <div className='text-surface-grey absolute my-2 ml-2 mr-1 inline-flex items-center justify-center'>
                {startAdornment}
              </div>
            ),
          })}
          {...(endAdornment && {
            endAdornment: (
              <div
                className={`absolute right-2 ml-1 flex  h-full items-center justify-center   ${
                  error ? 'text-error-light-200' : 'text-surface-grey'
                }`}
              >
                {error ? <></> : endAdornment}
              </div>
            ),
          })}
          ref={ref}
        />
        {helperText && (
          <span
            className={`${
              error ? 'text-error-light-200' : 'text-surface-grey '
            } ml-3 text-sm`}
          >
            {helperText}
          </span>
        )}
        {!!label && (
          <label
            className='peer-focus-within:text-black-600 text-primary-main  absolute -top-5 left-0 mb-2 text-sm font-semibold'
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
});

export default Input;
