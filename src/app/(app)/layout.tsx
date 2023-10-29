import { withAuth } from "@/core/auth/helpers/withAuth";
import { PropsWithChildren } from "react";

const AppLayout = async ({ children }: PropsWithChildren) => {
    return <>{children}</>;
}

export default withAuth(AppLayout);