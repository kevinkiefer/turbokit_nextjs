'use client';

import { useDashboardPath } from '@/core/hooks/useDashboardPath';
import { Spinner } from '@/core/ui/Spinner';
import { api } from '@/lib/api/client/api';
import { Portal } from '@ark-ui/react';
import { Select } from '@ark-ui/react/select';
import { SystemStyleObject } from '@pandacss/dev';
import { ChevronUpIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FunctionComponent } from 'react';
import { css } from '~/styled-system/css';
import { Box, styled } from '~/styled-system/jsx';
import { useTeamId } from '../hooks/useTeamId';

const layoutStyles: SystemStyleObject = {
  bg: 'bg.default',
  w: 'full',
  py: 4,
  px: 4,
  rounded: 'sm',
  textAlign: 'left',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'border.subtle',
  fontWeight: 'medium',
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
};

const TeamSelectTrigger = styled(Select.Trigger, {
  base: layoutStyles,
});

const TeamSelectContent = styled(Select.Content, {
  base: {
    bg: 'bg.default',
    w: '223px',
    rounded: 'sm',
    px: 2,
    py: 2,
    shadow: 'sm',
  },
});

const TeamSelectItem = styled(Select.Item, {
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    _hover: {
      bg: 'bg.subtle',
    },
    p: 2,
    rounded: 'xs',
  },
});

export const TeamSelect: FunctionComponent = () => {
  const { data: teams, isLoading } = api.teams.getTeams.useQuery();
  const teamId = useTeamId();
  const { getPath } = useDashboardPath();
  const router = useRouter();

  if (isLoading || !teams) {
    return (
      <div className={css(layoutStyles)}>
        <styled.span w="full" textAlign="center">
          <Spinner />
        </styled.span>
      </div>
    );
  }

  const items = teams.map((team) => ({
    value: team.id,
    label: team.name,
  }));

  return (
    <Select.Root
      items={items}
      value={[teamId]}
      onChange={(e) => router.replace(getPath(e.value[0]))}
    >
      <Select.Control>
        <TeamSelectTrigger>
          <Select.Value placeholder="Select a team" />
          <Box color="fg.muted">
            <ChevronUpIcon />
          </Box>
        </TeamSelectTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <TeamSelectContent>
            <Select.ItemGroup id="team">
              {items.map((team) => (
                <TeamSelectItem key={team.value} item={team.value}>
                  <Select.ItemText>{team.label}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </TeamSelectItem>
              ))}
            </Select.ItemGroup>
          </TeamSelectContent>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
