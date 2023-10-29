"use client";

import appConfig from "@/app.config";
import { api } from "@/core/api/api";
import { Button } from "@/core/ui/Button";
import { Input } from "@/core/ui/Input";
import { Label } from "@/core/ui/Label";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Stack } from "~/styled-system/jsx";

export const createTeamSchema = z.object({
    name: z.string().min(3),
});

export type CreateTeamSchema = z.infer<typeof createTeamSchema>;

export const CreateTeamForm: FunctionComponent = () => {
    const router = useRouter();
    const { mutate, isLoading } = api.teams.createTeam.useMutation({
        onSuccess: (data) => {
            router.push(`${appConfig.paths.appHome}/${data.id}`)
        }
    });

    const { handleSubmit, register } = useForm<CreateTeamSchema>({
        resolver: zodResolver(createTeamSchema)
    });

    const onSubmit = (team: CreateTeamSchema) => {

        if (isLoading) {
            return;
        }

        mutate(team);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap="4">
                <Stack gap="1">
                    <Label>Name</Label>
                    <Input {...register("name")} />
                </Stack>
                <Button>Create team</Button>
            </Stack>
        </form>
    )
}