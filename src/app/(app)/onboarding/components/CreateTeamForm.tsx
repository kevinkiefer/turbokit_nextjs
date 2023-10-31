'use client';

import appConfig from '@/app.config';
import { Button } from '@/core/ui/Button';
import { Input } from '@/core/ui/Input';
import { Spinner } from '@/core/ui/Spinner';
import { FormControl } from '@/core/ui/form/FormControl';
import { FormDescription } from '@/core/ui/form/FormDescription';
import { FormField } from '@/core/ui/form/FormField';
import { FormItem } from '@/core/ui/form/FormItem';
import { FormLabel } from '@/core/ui/form/FormLabel';
import { FormMessage } from '@/core/ui/form/FormMessage';
import { api } from '@/lib/api/client/api';
import {
  createTeamSchema,
  type CreateTeamSchema,
} from '@/lib/teams/models/createTeamSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FunctionComponent } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { HStack, Stack } from '~/styled-system/jsx';

type ContinueButtonProps = {
  isLoading: boolean;
};

const ContinueButton: FunctionComponent<ContinueButtonProps> = ({
  isLoading,
}) => {
  const body = isLoading ? (
    <Spinner variant="accent" />
  ) : (
    <>
      Continue{' '}
      <span>
        <ArrowRightIcon width={24} height={24} />
      </span>
    </>
  );

  return (
    <Button w="120px" type="submit">
      {body}
    </Button>
  );
};

export const CreateTeamForm: FunctionComponent = () => {
  const router = useRouter();

  const { mutate, isLoading, isSuccess } = api.teams.createTeam.useMutation({
    onSuccess: () => {
      router.push(appConfig.paths.appHome);
    },
  });

  const form = useForm<CreateTeamSchema>({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (data: CreateTeamSchema) => {
    if (isLoading || isSuccess) {
      return;
    }

    mutate(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Stack gap="4">
          <Stack gap="1">
            <FormField
              control={form.control}
              name={'name'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Give your team a name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Stack>
          <HStack justifyContent="end">
            <ContinueButton isLoading={isLoading} />
          </HStack>
        </Stack>
      </form>
    </FormProvider>
  );
};
