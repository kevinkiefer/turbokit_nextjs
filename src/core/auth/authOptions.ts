import { prisma } from "@/core/server/db";
import { env } from "@/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions, DefaultSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
        } & DefaultSession["user"];
    }
}


export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: env.GITHUB_CLIENT_ID,
            clientSecret: env.GITHUB_CLIENT_SECRET,
        })
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
            },
        }),
    },
}