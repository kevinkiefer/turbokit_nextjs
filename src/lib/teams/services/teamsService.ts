import { prisma } from "@/core/server/db";
import { CreateTeamParams, CreateTeamResult, createTeam } from "./createTeam";
import { HasAnyTeamParams, hasAnyTeam } from "./hasAnyTeam";

export interface TeamsService {
    hasAnyTeam: (params: HasAnyTeamParams) => Promise<boolean>;
    createTeam: (params: CreateTeamParams) => Promise<CreateTeamResult>;
}

export const teamsService: TeamsService = {
    hasAnyTeam: hasAnyTeam(prisma),
    createTeam: createTeam(prisma)
}