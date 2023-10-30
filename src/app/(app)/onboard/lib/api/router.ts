import { changeTeamName } from "@/app/(app)/teams/lib/changeTeamName";
import { getTeams } from "@/app/(app)/teams/lib/getTeams";
import { createTRPCRouter } from "@/core/server/api/trpc";
import { createTeam } from "./createTeam";

export const teamRouter = createTRPCRouter({
    createTeam,
    changeTeamName,
    getTeams
})