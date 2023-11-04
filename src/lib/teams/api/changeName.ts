import { protectedProcedure } from '@/core/server/trpc';
import z from 'zod';
import { changeTeamNameSchema } from '../models/changeTeamNameSchema';
import { teamsService } from '../services/teamsService';

const changeNameInputSchema = changeTeamNameSchema.merge(
    z.object({
        id: z.string(),
    })
);

const changeNameOutputSchema = z.object({
    id: z.string(),
    name: z.string(),
});

export const changeName = protectedProcedure
    .input(changeNameInputSchema)
    .output(changeNameOutputSchema)
    .mutation(async ({ input, ctx }) => {
        return teamsService.changeName({
            teamId: input.id,
            name: input.name,
            userId: ctx.session.user.id,
        });
    });
