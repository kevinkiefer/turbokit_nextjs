import { protectedProcedure } from "@/core/server/trpc";
import z from "zod";
import { teamsService } from "../services/teamsService";

const getTeamsOutputSchema = z.array(z.object({
    id: z.string(),
    name: z.string(),
}));

export const getTeams = protectedProcedure
    .output(getTeamsOutputSchema)
    .query(async ({ ctx }) => {
        return teamsService.getTeams({
            userId: ctx.session.user.id,
        });
    })