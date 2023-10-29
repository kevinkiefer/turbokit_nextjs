import { protectedProcedure } from "@/core/server/api/trpc";
import { z } from "zod";
import { createTeamSchema } from "../../components/CreateTeamForm";

// export const createTeamSchema = z.object({
//     name: z.string().min(3),
// });

// export type CreateTeamSchema = z.infer<typeof createTeamSchema>;

const createTeamResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
});

export const createTeam = protectedProcedure
    .input(createTeamSchema)
    .output(createTeamResponseSchema)
    .mutation(async ({ input, ctx }) => {
        const team = await ctx.prisma.team.create({
            data: {
                name: input.name,
                members: {
                    create: {
                        memberId: ctx.session.user.id,
                        role: "Owner"
                    }
                }
            }
        });

        return {
            id: team.id,
            name: team.name,
        }
    });