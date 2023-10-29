import appConfig from "@/app.config";
import { authOptions } from "@/core/auth/authOptions";
import { prisma } from "@/core/server/db";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { FunctionComponent } from "react";

const DashboardPage: FunctionComponent = async () => {

    const session = await getServerSession(authOptions);

    const team = await prisma.team.findFirst({
        where: {
            members: {
                some: {
                    memberId: session!.user.id,
                }
            }
        }
    });

    if (!team) {
        redirect(appConfig.paths.onboard);
    }

    redirect(`${appConfig.paths.appHome}/${team.id}/dashboard`)
}

export default DashboardPage;