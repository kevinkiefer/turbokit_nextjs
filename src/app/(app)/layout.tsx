import { ClientProvider } from '@/core/api/ClientProvider';
import { withAuth } from '@/core/auth/helpers/withAuth';
import { AppShell, AppShellHeader, AppShellMain } from '@/core/ui/AppShell';
import { ToastProvider } from '@/core/ui/Toast';
import { Header } from '@/lib/components/Header/Header';
import { Toasts } from '@/lib/components/Toasts';
import { PropsWithChildren } from 'react';
import { Box } from '~/styled-system/jsx';

const AppLayout = async ({ children }: PropsWithChildren) => {
  return (
    <ClientProvider>
      <ToastProvider max={1}>
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
        <Toasts />
      </ToastProvider>
    </ClientProvider>
  );
};

export default withAuth(AppLayout);
