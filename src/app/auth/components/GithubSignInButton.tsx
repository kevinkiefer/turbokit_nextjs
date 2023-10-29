"use client";

import appConfig from "@/app.config";
import { Button } from "@/core/ui/Button";
import { signIn } from "next-auth/react";
import { FunctionComponent } from "react";

export const GithubSignInButton: FunctionComponent = () => {

    const onClick = () => signIn("github", { callbackUrl: appConfig.paths.appHome, });

    return <Button variant="outline" onClick={onClick}>Sign in with Github</Button>
}