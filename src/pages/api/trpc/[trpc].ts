import { appRouter } from "@/core/server/api/root";
import { createTRPCContext } from "@/core/server/api/trpc";
import { env } from "@/env";
import { createNextApiHandler } from "@trpc/server/adapters/next";

export default createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
    onError:
        env.NODE_ENV === "development"
            ? ({ path, error }) => {
                console.error(
                    `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
                );
            }
            : undefined,
});