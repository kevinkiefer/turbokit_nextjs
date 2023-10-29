import { withAnonymous } from "@/core/auth/helpers/withAnonymous";
import { PropsWithChildren } from "react";
import { Stack } from "~/styled-system/jsx";

const AuthLayout = async ({ children }: PropsWithChildren) => {
    return (
        <Stack h="screen" justifyContent="center" alignItems="center">
            {children}
        </Stack>
    )
}

export default withAnonymous(AuthLayout);