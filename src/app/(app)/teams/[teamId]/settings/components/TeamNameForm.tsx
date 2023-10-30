'use client';

import { api } from '@/core/api/api';
import { Button } from '@/core/ui/Button';
import { Input } from '@/core/ui/Input';
import { Label } from '@/core/ui/Label';
import { Spinner } from '@/core/ui/Spinner';
import { useToast } from '@/core/ui/Toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Stack } from '~/styled-system/jsx';

export const changeTeamNameSchema = z.object({
  name: z.string().min(3),
});

export type ChangeTeamNameSchema = z.infer<typeof changeTeamNameSchema>;

type TeamNameFormProps = {
  id: string;
};

export const TeamNameForm: FunctionComponent<TeamNameFormProps> = ({ id }) => {
  const toast = useToast();
  const { mutate, isLoading } = api.teams.changeTeamName.useMutation({
    onSuccess: (_data, _variables, context) => {
      toast.create({
        title: 'Team name updated',
        description: 'Bla bla bla',
        placement: 'bottom-end',
        type: 'success',
      });
    },
  });

  const { handleSubmit, register } = useForm<ChangeTeamNameSchema>({
    resolver: zodResolver(changeTeamNameSchema),
  });

  const onSubmit = (data: ChangeTeamNameSchema) => {
    mutate({
      id,
      ...data,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack justifyContent="end" placeItems={'end'}>
        <Stack gap="1" w="full">
          <Label>Name</Label>
          <Input {...register('name')} />
        </Stack>
        <Button>{isLoading ? <Spinner variant="accent" /> : 'Save'}</Button>
      </Stack>
    </form>
  );
};
