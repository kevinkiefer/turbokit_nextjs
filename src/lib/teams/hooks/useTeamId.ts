"use client";

import { useParams } from "next/navigation";

type TeamIdParams = {
    teamId: string;
}

export const useTeamId = () => {
    const params = useParams<TeamIdParams>();

    const teamId = params?.teamId;

    if (!teamId) {
        throw new Error("Team id not provided");
    }

    return teamId;
}