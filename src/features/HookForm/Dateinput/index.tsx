import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

import Input, { InputProp } from '@/components/Input';
// import { getFormattedDate } from 'functions/date'
interface IProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: object;
  preventmax?: boolean;
}

type TextFieldProps<T extends FieldValues> = IProps<T> & InputProp;
function DateInput<T extends FieldValues>(props: TextFieldProps<T>) {
  const { control, name, rules, helperText, ...otherProps } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { ...field } }) => {
        return (
          <Input
            helperText={helperText}
            placeholder={props.placeholder}
            {...field}
            //  slotProps={{ input: { max: getFormattedDate(String(new Date())) }} }
            {...otherProps}
          />
        );
      }}
    />
  );
}

export default DateInput;
