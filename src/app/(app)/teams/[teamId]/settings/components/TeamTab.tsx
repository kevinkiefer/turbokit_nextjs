'use client';

import { Divider } from '@/core/ui/Divider';
import { Heading } from '@/core/ui/Heading';
import { Text } from '@/core/ui/Text';
import { useParams } from 'next/navigation';
import { FunctionComponent } from 'react';
import { Box, Grid, Stack } from '~/styled-system/jsx';
import { TeamNameForm } from './TeamNameForm';

export const TeamTab: FunctionComponent = () => {
  const params = useParams<{ teamId: string }>();

  const teamId = params?.teamId;

  if (!teamId) {
    return null;
  }

  return (
    <Stack>
      <Grid
        gridTemplateAreas={`'title content'`}
        gridTemplateRows="auto"
        gridTemplateColumns="1fr 3fr"
      >
        <Stack gridArea="title">
          <Heading>General</Heading>
          <Text>Manage your team</Text>
        </Stack>
        <Box gridArea="content">
          <TeamNameForm id={teamId} />
        </Box>
      </Grid>
      <Divider />
    </Stack>
  );
};
