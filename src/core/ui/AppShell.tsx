import { Box, styled } from '~/styled-system/jsx';

export const AppShell = styled('div', {
  base: {
    display: 'grid',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    gap: 0,
    gridTemplateAreas: `
            'sidebar header'
            'sidebar main'
        `,
    gridTemplateRows: '64px 1fr',
    gridTemplateColumns: '256px 1fr',
    bg: 'bg.default',
  },
});

export const AppShellMain = styled('main', {
  base: {
    gridArea: 'main',
  },
});

export const AppShellHeader = styled(Box, {
  base: {
    gridArea: 'header',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'border.subtle',
    bg: 'bg.default',
  },
});

export const AppShellSidebar = styled(Box, {
  base: {
    gridArea: 'sidebar',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'border.subtle',
    position: 'relative',
  },
});
