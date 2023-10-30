import { protectedProcedure } from '@/core/server/api/trpc';
import { prisma } from '@/core/server/db';
import * as z from 'zod';

const getTeamsOutputSchema = z.array(
    z.object({
        id: z.string(),
        name: z.string(),
    })
);

export const getTeams = protectedProcedure
    .output(getTeamsOutputSchema)
    .query(async ({ ctx }) => {
        const teams = await prisma.team.findMany({
            where: {
                members: {
                    some: {
                        memberId: ctx.session.user.id,
                    },
                },
            },
        });

        return teams.map((team) => ({
            id: team.id,
            name: team.name,
        }));
    });
