import {
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
  Tabs,
} from '@/core/ui/Tabs';
import { FunctionComponent } from 'react';
import { TeamTab } from './components/TeamTab';

const tabs = [
  {
    id: 'team',
    label: 'Team',
  },
];

const SettingsPage: FunctionComponent = () => {
  return (
    <Tabs defaultValue="team">
      <TabList>
        {tabs.map((option) => (
          <TabTrigger key={option.id} value={option.id}>
            {option.label}
          </TabTrigger>
        ))}
        <TabIndicator />
      </TabList>
      <TabContent value="team">
        <TeamTab />
      </TabContent>
    </Tabs>
  );
};

export default SettingsPage;
