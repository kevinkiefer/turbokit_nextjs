import { FunctionComponent, Ref } from 'react';
import { useFormContext } from 'react-hook-form';
import { Text } from '../Text';
import { useFormField } from './FormField';

export const FormMessage: FunctionComponent = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const { name } = useFormField();

  const fieldError = errors[name];

  if (!fieldError) {
    return null;
  }

  const ref = fieldError.ref as Ref<HTMLParagraphElement>;
  const body = String(fieldError.message);

  if (!body) {
    return null;
  }

  return (
    <Text ref={ref} color="danger.default" fontSize="sm">
      {body}
    </Text>
  );
};
