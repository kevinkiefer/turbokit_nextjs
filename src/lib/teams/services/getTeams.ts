import { PrismaClient } from "@prisma/client";

export type GetTeamsParams = {
    userId: string;
}

export type GetTeamsResult = {
    id: string;
    name: string;
}

export const getTeams = (db: PrismaClient) => async ({ userId }: GetTeamsParams) => {
    const teams = await db.team.findMany({
        where: {
            members: {
                some: {
                    memberId: userId,
                }
            }
        },
        select: {
            id: true,
            name: true,
        }
    });

    return teams;
}