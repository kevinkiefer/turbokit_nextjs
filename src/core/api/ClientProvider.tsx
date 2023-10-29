"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import superjson from "superjson";
import { AppRouter } from "../server/api/root";
import { getBaseUrl } from "./api";

export const trpc = createTRPCReact<AppRouter>({
    unstable_overrides: {
        useMutation: {
            async onSuccess(opts) {
                await opts.originalFn();
                await opts.queryClient.invalidateQueries();
            },
        },
    },
});

export const ClientProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {

    const [{ queryClient, trpcClient }] = useState(() => ({
        queryClient: new QueryClient(),
        trpcClient: trpc.createClient({
            links: [
                loggerLink({
                    enabled: () => true,
                }),
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
            transformer: superjson,
        })
    }));

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    );
}