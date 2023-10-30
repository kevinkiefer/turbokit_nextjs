import { withAuth } from '@/core/auth/helpers/withAuth';
import { AppShell, AppShellHeader, AppShellMain } from '@/core/ui/AppShell';
import { Header } from '@/lib/components/Header/Header';
import { PropsWithChildren } from 'react';
import { Box } from '~/styled-system/jsx';

const AppLayout = async ({ children }: PropsWithChildren) => {
  return (
    <AppShell>
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Box maxW="6xl" mx="auto">
          {children}
        </Box>
      </AppShellMain>
    </AppShell>
  );
};

export default withAuth(AppLayout);
