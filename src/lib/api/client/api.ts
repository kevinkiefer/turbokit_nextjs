"use client";

import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import superjson from "superjson";
import { AppRouter } from "../server/root";

export const getBaseUrl = () => {

    if (typeof window !== "undefined") {
        return "";
    }

    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const api = createTRPCNext<AppRouter>({
    config() {
        return {
            transformer: superjson,
            links: [
                loggerLink({
                    enabled: (opts) =>
                        process.env.NODE_ENV === "development" ||
                        (opts.direction === "down" && opts.result instanceof Error),
                }),
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
        };
    },
    ssr: false,
});