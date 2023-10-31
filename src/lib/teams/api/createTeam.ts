import { protectedProcedure } from '@/core/server/trpc';
import z from 'zod';
import { createTeamSchema } from '../models/createTeamSchema';
import { teamsService } from '../services/teamsService';

const createTeamOutputSchema = z.object({
    id: z.string(),
    name: z.string(),
});

export const createTeam = protectedProcedure
    .input(createTeamSchema)
    .output(createTeamOutputSchema)
    .mutation(({ input, ctx }) => {
        return teamsService.createTeam({
            userId: ctx.session.user.id,
            name: input.name,
        });
    });
