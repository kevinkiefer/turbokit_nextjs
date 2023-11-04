import { Heading } from '@/core/ui/Heading';
import { Text } from '@/core/ui/Text';
import { FunctionComponent } from 'react';
import { Box, Grid, Stack } from '~/styled-system/jsx';
import { ChangeTeamNameForm } from './ChangeTeamNameForm';

export const GeneralSection: FunctionComponent = () => {
  return (
    <Grid gridTemplateColumns="1fr 3fr" p="8" gap="8">
      <Stack>
        <Heading>General</Heading>
        <Text>Manage your team</Text>
      </Stack>
      <Box>
        <ChangeTeamNameForm />
      </Box>
    </Grid>
  );
};
