import z from 'zod';

export const createTeamSchema = z.object({
    name: z.string().min(3),
});

export type CreateTeamSchema = z.infer<typeof createTeamSchema>;