import { ark } from '@ark-ui/react';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { styled } from '~/styled-system/jsx';
import { input, type InputVariantProps } from '~/styled-system/recipes';

export type InputProps = InputVariantProps &
  ComponentPropsWithoutRef<typeof ark.input>;
const StyledInput = styled(ark.input, input);

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<typeof StyledInput>
>((props, ref) => <StyledInput ref={ref} {...props} />);

Input.displayName = 'Input';
