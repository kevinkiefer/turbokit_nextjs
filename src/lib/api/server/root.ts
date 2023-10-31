import { teamRouter } from '@/lib/teams/api/router';
import { createTRPCRouter } from '../../../core/server/trpc';

export const appRouter = createTRPCRouter({
    teams: teamRouter,
});

export type AppRouter = typeof appRouter;
