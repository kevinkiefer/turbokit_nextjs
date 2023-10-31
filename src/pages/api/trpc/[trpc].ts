import { createTRPCContext } from '@/core/server/trpc';
import { env } from '@/env';
import { appRouter } from '@/lib/api/server/root';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export default createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
    onError:
        env.NODE_ENV === 'development'
            ? ({ path, error }) => {
                console.error(
                    `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
                );
            }
            : undefined,
});
