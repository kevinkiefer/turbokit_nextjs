import { createTRPCRouter } from '@/core/server/trpc';
import { createTeam } from './createTeam';
import { getTeams } from './getTeams';

export const teamRouter = createTRPCRouter({
    createTeam,
    getTeams,
});
