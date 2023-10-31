import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useId,
} from 'react';
import { Stack } from '~/styled-system/jsx';

type FormItemContextValue = {
  id: string;
  descriptionId: string;
  errorId: string;
};

const Context = createContext<FormItemContextValue>(null!);

export const useFormItem = () => useContext(Context);

export const FormItem: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const id = useId();

  const descriptionId = `${id}-description`;
  const errorId = `${id}-error`;

  return (
    <Context.Provider value={{ id, descriptionId, errorId }}>
      <Stack gap="1">{children}</Stack>
    </Context.Provider>
  );
};
