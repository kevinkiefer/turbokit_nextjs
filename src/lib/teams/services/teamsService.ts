import { prisma } from "@/core/server/db";
import { ChangeTeamNameParams, ChangeTeamNameResult, changeTeamName } from "./changeTeamName";
import { CreateTeamParams, CreateTeamResult, createTeam } from "./createTeam";
import { GetTeamsParams, GetTeamsResult, getTeams } from "./getTeams";
import { HasAnyTeamParams, hasAnyTeam } from "./hasAnyTeam";

export interface TeamsService {
    hasAnyTeam: (params: HasAnyTeamParams) => Promise<boolean>;
    createTeam: (params: CreateTeamParams) => Promise<CreateTeamResult>;
    getTeams: (params: GetTeamsParams) => Promise<GetTeamsResult[]>;
    changeName: (params: ChangeTeamNameParams) => Promise<ChangeTeamNameResult>;
}

export const teamsService: TeamsService = {
    hasAnyTeam: hasAnyTeam(prisma),
    createTeam: createTeam(prisma),
    getTeams: getTeams(prisma),
    changeName: changeTeamName(prisma),
}