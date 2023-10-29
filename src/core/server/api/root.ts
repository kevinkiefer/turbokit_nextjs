import { createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
    greeting: publicProcedure.query(async () => {
        return "Hello World!";
    })
});

export type AppRouter = typeof appRouter;