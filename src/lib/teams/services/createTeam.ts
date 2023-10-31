import { PrismaClient } from '@prisma/client';

export type CreateTeamParams = {
    userId: string;
    name: string;
};

export type CreateTeamResult = {
    id: string;
    name: string;
};

export const createTeam =
    (db: PrismaClient) => async ({ userId, name }: CreateTeamParams): Promise<CreateTeamResult> => {
        const team = await db.team.create({
            data: {
                name,
                members: {
                    create: {
                        memberId: userId,
                        role: 'Owner',
                    },
                },
            },
            select: {
                id: true,
                name: true,
            },
        });

        return team;
    };
