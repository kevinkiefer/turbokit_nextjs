import { getServerAuthSession } from "@/core/auth/getServerAuthSession";
import { initTRPC, TRPCError } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { type Session } from "next-auth";
import superjson from "superjson";
import { ZodError } from "zod";
import { prisma } from "../db";

type CreateContextOptions = {
    session: Session | null;
};

const createInnerTRPCContext = (opts: CreateContextOptions) => {
    return {
        session: opts.session,
        prisma,
    };
};

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
    const { req, res } = opts;

    const session = await getServerAuthSession({ req, res });

    return createInnerTRPCContext({
        session,
    });
};

const t = initTRPC.context<typeof createTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
});

export const createTRPCRouter = t.router;

const isAuthenticatedMiddleware = t.middleware(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return next({
        ctx: {
            session: { ...ctx.session, user: ctx.session.user },
        },
    });
});

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthenticatedMiddleware);