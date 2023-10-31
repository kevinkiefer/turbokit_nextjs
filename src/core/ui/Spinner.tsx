import { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { css } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';

export const StyledSpinner = styled('span', {
    base: {
        animation: 'spin',
        display: 'inline-block',
        borderWidth: '3px',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        rounded: 'full',
    },
    variants: {
        size: {
            md: {
                w: 6,
                h: 6,
            },
            lg: {
                w: 8,
                h: 8,
            },
        },
        variant: {
            default: {
                borderTopColor: 'accent.default',
            },
            accent: {
                borderTopColor: 'bg.default',
            },
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'default',
    },
});

export const Spinner: FunctionComponent<
    ComponentPropsWithoutRef<typeof StyledSpinner>
> = (props) => {
    return (
        <StyledSpinner {...props}>
            <span
                className={css({
                    pos: 'absolute',
                    w: 'sr.only',
                    h: 'sr.only',
                    p: 'sr.only',
                    m: 'sr.only',
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    borderWidth: '0',
                })}
            >
                Loading...
            </span>
        </StyledSpinner>
    );
};
