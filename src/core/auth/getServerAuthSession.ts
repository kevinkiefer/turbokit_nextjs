import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next/types";
import { authOptions } from "./authOptions";

export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext["req"];
    res: GetServerSidePropsContext["res"];
}) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};