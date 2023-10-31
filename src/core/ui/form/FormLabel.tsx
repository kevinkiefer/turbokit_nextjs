import { FunctionComponent, PropsWithChildren } from 'react';
import { Label } from '../Label';
import { useFormItem } from './FormItem';

export const FormLabel: FunctionComponent<PropsWithChildren> = ({
    children,
}) => {
    const { id } = useFormItem();

    return <Label htmlFor={id}>{children}</Label>;
};
