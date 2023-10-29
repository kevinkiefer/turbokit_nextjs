import { ClientProvider } from "@/core/api/ClientProvider";
import { withAuth } from "@/core/auth/helpers/withAuth";
import { PropsWithChildren } from "react";

const AppLayout = async ({ children }: PropsWithChildren) => {
    return (
        <ClientProvider>
            {children}
        </ClientProvider>
    );
}

export default withAuth(AppLayout);