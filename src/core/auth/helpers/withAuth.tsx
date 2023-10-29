import appConfig from "@/app.config";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import { authOptions } from "../authOptions";

export const withAuth = <TProps extends Record<string, any> = {}>(
    Component: FunctionComponent<TProps>
) => {
    return async (props: TProps) => {
        const session = await getServerSession(authOptions);

        if (!session) {
            redirect(appConfig.paths.signIn);
        }

        return <Component {...props} />;
    };
};