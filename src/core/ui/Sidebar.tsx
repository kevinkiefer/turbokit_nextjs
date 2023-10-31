import { Box, styled } from '~/styled-system/jsx';

export const Sidebar = styled('aside', {
  base: {
    display: 'grid',
    gridTemplateAreas: `
        'header'
        'nav'
        'footer'
    `,
    gridTemplateRows: '64px 1fr auto',
    gridTemplateColumns: '1fr',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    bg: 'bg.subtle',
    px: 4,
    pb: 4,
  },
});

export const SidebarHeader = styled(Box, {
  base: {
    gridArea: 'header',
    display: 'flex',
    alignItems: 'center',
  },
});

export const SidebarNavigation = styled('nav', {
  base: {
    gridArea: 'nav',
    py: 2,
  },
});

export const SidebarFooter = styled(Box, {
  base: {
    gridArea: 'footer',
  },
});
