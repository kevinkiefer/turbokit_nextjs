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
  },
});

export const SidebarHeader = styled(Box, {
  base: {
    gridArea: 'header',
    display: 'flex',
    alignItems: 'center',
    px: 4,
    py: 4,
  },
});

export const SidebarNavigation = styled('nav', {
  base: {
    gridArea: 'nav',
    px: 4,
    py: 4,
  },
});

export const SidebarFooter = styled(Box, {
  base: {
    gridArea: 'footer',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'border.subtle',
    px: 4,
    py: 4,
  },
});
