import { PrismaClient } from "@prisma/client";

export type HasAnyTeamParams = {
    userId: string;
}

export const hasAnyTeam = (db: PrismaClient) => async ({ userId }: HasAnyTeamParams): Promise<boolean> => {
    const teamCount = await db.team.count({
        where: {
            members: {
                some: {
                    memberId: userId,
                }
            }
        }
    });

    return teamCount > 0;
}