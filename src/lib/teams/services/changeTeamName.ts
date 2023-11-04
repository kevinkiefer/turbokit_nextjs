import { MemberRole, PrismaClient } from '@prisma/client';

export type ChangeTeamNameParams = {
    teamId: string;
    userId: string;
    name: string;
};

export type ChangeTeamNameResult = {
    id: string;
    name: string;
};

const hasRequiredRole = (requiredRole: MemberRole, userRole: MemberRole) => {
    switch (requiredRole) {
        case 'Owner':
            return userRole === 'Owner';
        case 'Admin':
            return userRole === 'Owner' || userRole === 'Admin';
        case 'Member':
            return (
                userRole === 'Owner' || userRole === 'Admin' || userRole === 'Member'
            );
    }
};

export const changeTeamName =
    (db: PrismaClient) =>
        async ({ teamId, userId, name }: ChangeTeamNameParams) => {
            const memberAndTeam = await db.teamMember.findUnique({
                where: {
                    teamId_memberId: {
                        teamId,
                        memberId: userId,
                    },
                },
                include: {
                    team: true,
                },
            });

            if (!memberAndTeam) {
                throw new Error('Team not found');
            }

            if (!hasRequiredRole('Admin', memberAndTeam.role)) {
                throw new Error('Forbidden');
            }

            const team = await db.team.update({
                where: {
                    id: teamId,
                },
                data: {
                    name,
                },
                select: {
                    id: true,
                    name: true,
                },
            });

            return team;
        };
