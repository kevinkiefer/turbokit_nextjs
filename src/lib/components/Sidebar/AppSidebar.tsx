'use client';

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarNavigation,
} from '@/core/ui/Sidebar';
import { Text } from '@/core/ui/Text';
import { TeamSelect } from '@/lib/teams/components/TeamSelect';
import { FunctionComponent } from 'react';
import { Navigation } from './Navigation';

export const AppSidebar: FunctionComponent = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Text as="span" textStyle="xl" fontWeight="semibold">
          Turbokit
        </Text>
      </SidebarHeader>
      <SidebarNavigation>
        <Navigation />
      </SidebarNavigation>
      <SidebarFooter>
        <TeamSelect />
      </SidebarFooter>
    </Sidebar>
  );
};
