import appConfig from "@/app.config";
import { authOptions } from "@/core/auth/authOptions";
import { prisma } from "@/core/server/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import { Stack } from "~/styled-system/jsx";

const OnboardLayout = async ({ children }: PropsWithChildren) => {
    const session = await getServerSession(authOptions);
    const hasAnyTeam = await prisma.team.count({
        where: {
            members: {
                some: {
                    memberId: session!.user.id,
                }
            }
        }
    });

    if (hasAnyTeam) {
        redirect(appConfig.paths.appHome);
    }

    return (
        <Stack h="screen" justifyContent="center" alignItems="center">
            {children}
        </Stack>
    )
}

export default OnboardLayout;