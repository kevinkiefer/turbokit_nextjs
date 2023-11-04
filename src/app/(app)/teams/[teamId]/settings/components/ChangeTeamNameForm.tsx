import { Button } from '@/core/ui/Button';
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/core/ui/Card';
import { Input } from '@/core/ui/Input';
import { Spinner } from '@/core/ui/Spinner';
import { useToast } from '@/core/ui/Toast';
import { FormControl } from '@/core/ui/form/FormControl';
import { FormDescription } from '@/core/ui/form/FormDescription';
import { FormField } from '@/core/ui/form/FormField';
import { FormItem } from '@/core/ui/form/FormItem';
import { FormLabel } from '@/core/ui/form/FormLabel';
import { FormMessage } from '@/core/ui/form/FormMessage';
import { api } from '@/lib/api/client/api';
import { useTeamId } from '@/lib/teams/hooks/useTeamId';
import {
  ChangeTeamNameSchema,
  changeTeamNameSchema,
} from '@/lib/teams/models/changeTeamNameSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { getQueryKey } from '@trpc/react-query';
import { FunctionComponent } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const ChangeTeamNameForm: FunctionComponent = () => {
  const form = useForm<ChangeTeamNameSchema>({
    resolver: zodResolver(changeTeamNameSchema),
  });

  const teamId = useTeamId();
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutate, isLoading } = api.teams.changeName.useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(getQueryKey(api.teams.getTeams));
      toast.create({
        title: 'Team name updated',
        description: 'Your team name has been updated',
        type: 'success',
      });
    },
  });

  const onSubmit = (data: ChangeTeamNameSchema) => {
    if (isLoading) {
      return;
    }

    mutate({
      id: teamId,
      name: data.name,
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card shadow="none">
          <CardHeader pt="0">
            <CardTitle>Team Name</CardTitle>
            <CardDescription>Change your team&apos;s name.</CardDescription>
          </CardHeader>
          <CardBody>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your team&apos;s visible name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardBody>
          <CardFooter>
            <Button>
              {isLoading && <Spinner variant="accent" size="sm" />}
              Save
            </Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
};
