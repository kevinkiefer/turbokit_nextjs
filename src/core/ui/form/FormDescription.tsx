import { FunctionComponent, PropsWithChildren } from 'react';
import { Text } from '../Text';
import { useFormItem } from './FormItem';

export const FormDescription: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { descriptionId } = useFormItem();
  return (
    <Text fontSize={'xs'} aria-description={descriptionId}>
      {children}
    </Text>
  );
};
