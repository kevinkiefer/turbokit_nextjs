import appConfig from '@/app.config';
import { getServerAppSession } from '@/core/auth/getServerAppSession';
import { withAuth } from '@/core/auth/helpers/withAuth';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellSidebar,
} from '@/core/ui/AppShell';
import { ClientProvider } from '@/lib/api/client/ClientProvider';
import { Header } from '@/lib/components/Header/Header';
import { AppSidebar } from '@/lib/components/Sidebar/AppSidebar';
import { teamsService } from '@/lib/teams/services/teamsService';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { Box } from '~/styled-system/jsx';

const AppLayout = async ({ children }: PropsWithChildren) => {
  const session = await getServerAppSession();

  const hasAny = await teamsService.hasAnyTeam({
    userId: session.user.id,
  });

  if (!hasAny) {
    redirect(appConfig.paths.onboarding);
  }

  return (
    <ClientProvider>
      <AppShell>
        <AppShellHeader>
          <Header />
        </AppShellHeader>
        <AppShellSidebar>
          <AppSidebar />
        </AppShellSidebar>
        <AppShellMain>
          <Box maxW="6xl" mx="auto">
            {children}
          </Box>
        </AppShellMain>
      </AppShell>
    </ClientProvider>
  );
};

export default withAuth(AppLayout);
