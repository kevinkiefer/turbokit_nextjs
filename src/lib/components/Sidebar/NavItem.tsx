import Link from 'next/link';
import { styled } from '~/styled-system/jsx';

export const NavItem = styled(Link, {
  base: {
    py: 2,
    px: 4,
    rounded: 'sm',
    color: 'fg.default',
  },
  variants: {
    active: {
      true: {
        fontWeight: 'semibold',
        bg: 'accent.default',
        color: 'accent.fg',
        _hover: {
          bg: 'accent.default',
        },
      },
      false: {
        fontWeight: 'medium',
        _hover: {
          bg: 'bg.muted',
        },
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
