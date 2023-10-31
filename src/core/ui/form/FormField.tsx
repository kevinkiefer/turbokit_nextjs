import { createContext, useContext } from 'react';
import {
    Controller,
    ControllerProps,
    FieldPath,
    FieldValues
} from 'react-hook-form';

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName;
};

const Context = createContext<FormFieldContextValue>(null!);

export const useFormField = () => useContext(Context);

export const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
    props: ControllerProps<TFieldValues, TName>
) => {
    return (
        <Context.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </Context.Provider>
    );
};
