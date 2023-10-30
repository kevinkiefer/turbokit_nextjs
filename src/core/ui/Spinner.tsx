import { FunctionComponent } from 'react';
import { RecipeVariantProps, css, cva } from '~/styled-system/css';

const spinner = cva({
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

export type SpinnerVariants = RecipeVariantProps<typeof spinner>;
export type SpinnerProps = SpinnerVariants;

// export const Spinner = styled('span', {
//   base: {
//     animation: 'spin',
//     display: 'inline-block',
//     borderWidth: '3px',
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderBottomColor: 'transparent',
//     rounded: 'full',
//   },
//   variants: {
//     size: {
//       md: {
//         w: 6,
//         h: 6,
//       },
//       lg: {
//         w: 8,
//         h: 8,
//       },
//     },
//     variant: {
//       default: {
//         borderTopColor: 'accent.default',
//       },
//       accent: {
//         borderTopColor: 'bg.default',
//       },
//     },
//   },
//   defaultVariants: {
//     size: 'md',
//     variant: 'default',
//   },
// });

export const Spinner: FunctionComponent<SpinnerProps> = (props) => {
  const [variantProps, _] = spinner.splitVariantProps({ ...props });
  const classes = spinner(variantProps);
  return (
    <div className={classes} role="status" aria-label="loading">
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
    </div>
  );
};
