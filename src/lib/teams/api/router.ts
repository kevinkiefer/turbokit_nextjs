import { createTRPCRouter } from '@/core/server/trpc';
import { createTeam } from './createTeam';

export const teamRouter = createTRPCRouter({
    createTeam,
});
