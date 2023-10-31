import appConfig from "@/app.config";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./authOptions";

export const getServerAppSession = async (): Promise<Session> => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect(appConfig.paths.signIn);
    }

    return session;
}