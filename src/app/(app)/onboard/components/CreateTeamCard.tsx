"use client";

import { Card, CardBody, CardDescription, CardHeader, CardTitle } from "@/core/ui/Card";
import { FunctionComponent } from "react";
import { CreateTeamForm } from "./CreateTeamForm";

export const CreateTeamCard: FunctionComponent = () => {
    return (
        <Card minW="lg">
            <CardHeader>
                <CardTitle>Create your team</CardTitle>
                <CardDescription>Create your team to get started</CardDescription>
            </CardHeader>
            <CardBody>
                <CreateTeamForm />
            </CardBody>
        </Card>
    )
}