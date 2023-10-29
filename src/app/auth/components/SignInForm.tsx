import { Card, CardBody, CardDescription, CardHeader, CardTitle } from "@/core/ui/Card";
import { FunctionComponent } from "react";
import { Stack } from "~/styled-system/jsx";
import { GithubSignInButton } from "./GithubSignInButton";

export const SignInForm: FunctionComponent = () => {
    return (
        <Card minW="lg">
            <CardHeader>
                <CardTitle fontSize="xl">Sign In</CardTitle>
                <CardDescription>Sign in to your account</CardDescription>
            </CardHeader>
            <CardBody>
                <Stack>
                    <GithubSignInButton />
                </Stack>
            </CardBody>
        </Card>
    )
}