import { teamRouter } from "@/app/(app)/onboard/lib/api/router";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
    teams: teamRouter
});

export type AppRouter = typeof appRouter;