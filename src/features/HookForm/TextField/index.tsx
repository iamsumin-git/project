import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

import Input, { InputProp } from '@/components/Input';
interface IProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: object;
}

type TextFieldProps<T extends FieldValues> = IProps<T> & InputProp;
function TextField<T extends FieldValues>(props: TextFieldProps<T>) {
  const { control, name, rules, required, helperText, ...otherProps } = props;

  // const { errors } = useFormState<T>({ control, name })
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required, ...rules }}
      render={({ field: { ...field } }) => {
        return (
          <Input
            helperText={helperText}
            placeholder={props.placeholder}
            {...field}
            {...otherProps}
          />
        );
      }}
    />
  );
}

export default TextField;
