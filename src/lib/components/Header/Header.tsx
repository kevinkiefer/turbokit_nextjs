import { TeamSelect } from "@/app/(app)/teams/components/TeamSelect";
import { authOptions } from "@/core/auth/authOptions";
import { prisma } from "@/core/server/db";
import { Text } from "@/core/ui/Text";
import { getServerSession } from "next-auth";
import { HStack, styled } from "~/styled-system/jsx";
import { Navigation } from "./Navigation";

const headerHeight = "64px";

export const Header = async () => {

    const session = await getServerSession(authOptions);

    const teams = await prisma.team.findMany({
        where: {
            members: {
                some: {
                    memberId: session!.user.id,
                }
            }
        },
        select: {
            id: true,
            name: true,
        }
    })

    return (
        <styled.header h={headerHeight}>
            <HStack h={headerHeight} alignItems="center" maxW="6xl" mx="auto" justifyContent="space-between" zIndex="100">
                <HStack gap="4">
                    <Text as="span" textStyle="xl" fontWeight="semibold">Turbokit</Text>
                    <Navigation />
                </HStack>
                <TeamSelect teams={teams} />
            </HStack>
        </styled.header>
    )
}