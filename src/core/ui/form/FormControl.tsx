import {
  Children,
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  cloneElement,
} from 'react';
import { useFormContext } from 'react-hook-form';
import { useFormField } from './FormField';
import { useFormItem } from './FormItem';

export const FormControl: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const input = Children.only(children) as ReactElement;
  const { id, errorId, descriptionId } = useFormItem();
  const { getFieldState } = useFormContext();
  const { name } = useFormField();

  const isError = getFieldState(name).invalid;

  return cloneElement(input, {
    id,
    'aria-invalid': isError,
    'aria-describedby': isError ? errorId : descriptionId,
    ...input.props,
  });
};
