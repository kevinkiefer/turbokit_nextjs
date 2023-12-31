import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ['@pandacss/dev/presets', '@park-ui/panda-preset'],

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          danger: {
            default: {
              value: {
                base: '{colors.ruby.10}',
                _dark: '{colors.ruby.10}',
              },
            },
          },
        },
      },
    },
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});
