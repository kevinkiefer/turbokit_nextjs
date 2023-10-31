import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/core/ui/Card';
import type { FunctionComponent } from 'react';
import { CreateTeamForm } from './components/CreateTeamForm';

const OnboardingPage: FunctionComponent = () => {
  return (
    <Card minW="lg">
      <CardHeader>
        <CardTitle>Create your team</CardTitle>
        <CardDescription>
          Create your first team to get started.
        </CardDescription>
      </CardHeader>
      <CardBody>
        <CreateTeamForm />
      </CardBody>
    </Card>
  );
};

export default OnboardingPage;
