'use client';

import { api } from '@/core/api/api';
import { Button } from '@/core/ui/Button';
import {
  Select,
  SelectContent,
  SelectControl,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemIndicator,
  SelectItemText,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '@/core/ui/Select';
import { Portal } from '@ark-ui/react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { useParams } from 'next/navigation';
import { FunctionComponent } from 'react';

type Team = {
  name: string;
  id: string;
};

type TeamSelectProps = {
  teams: Team[];
};

export const TeamSelect: FunctionComponent<TeamSelectProps> = ({
  teams: initialTeams,
}) => {
  const { data: teams, isFetching } = api.teams.getTeams.useQuery();

  const params = useParams<{ teamId: string }>();

  if (params === null) {
    return null;
  }

  if (isFetching || !teams) {
    return <>Loading...</>;
  }

  const teamId = params.teamId;
  const items = teams.map((team) => ({
    value: team.id,
    label: team.name,
  }));

  return (
    <Select
      positioning={{ sameWidth: true }}
      width="2xs"
      items={items}
      value={[teamId]}
    >
      <SelectControl>
        <SelectTrigger>
          <SelectValue placeholder="Select a team" />
          <ChevronsUpDownIcon />
        </SelectTrigger>
      </SelectControl>
      <Portal>
        <SelectPositioner>
          <SelectContent>
            <SelectItemGroup id="teams">
              <SelectItemGroupLabel htmlFor="teams">
                Your Teams
              </SelectItemGroupLabel>
              {items.map((team) => (
                <SelectItem key={team.value} item={team.value}>
                  <SelectItemText>{team.label}</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectItemGroup>
            <Button variant="ghost">Create a team</Button>
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </Select>
  );
};
