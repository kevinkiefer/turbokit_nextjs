import z from 'zod';
import { teamNameSchema } from './teamNameSchema';

export const createTeamSchema = z.object({
    name: teamNameSchema,
});

export type CreateTeamSchema = z.infer<typeof createTeamSchema>;