import appConfig from '@/app.config';
import { getServerAppSession } from '@/core/auth/getServerAppSession';
import { teamsService } from '@/lib/teams/services/teamsService';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { Stack } from '~/styled-system/jsx';

const OnboardingLayout = async ({ children }: PropsWithChildren) => {
  const session = await getServerAppSession();

  const hasAnyTeam = await teamsService.hasAnyTeam({
    userId: session.user.id,
  });

  if (hasAnyTeam) {
    redirect(appConfig.paths.appHome);
  }

  return (
    <Stack h="screen" justifyContent="center" alignItems="center">
      {children}
    </Stack>
  );
};

export default OnboardingLayout;
