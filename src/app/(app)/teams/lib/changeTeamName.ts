import { protectedProcedure } from '@/core/server/api/trpc';
import * as z from 'zod';

const changeTeamNameSchema = z.object({
    id: z.string(),
    name: z.string(),
});

export const changeTeamName = protectedProcedure
    .input(changeTeamNameSchema)
    .mutation(async ({ input, ctx }) => {
        await ctx.prisma.team.updateMany({
            where: {
                id: input.id,
                members: {
                    some: {
                        OR: [
                            {
                                memberId: ctx.session.user.id,
                                role: 'Admin',
                            },
                            {
                                memberId: ctx.session.user.id,
                                role: 'Owner',
                            },
                        ],
                    },
                },
            },
            data: {
                name: input.name,
            },
        });
    });
