'use client';

import appConfig from '@/app.config';
import { useParams } from 'next/navigation';

type RouteParams = {
    teamdId: string;
};

export const useDashboardPath = () => {
    const params = useParams<RouteParams>();

    const getPath = (teamId: string | undefined = undefined) => {
        const id = teamId ?? params?.teamdId;

        if (!id) {
            throw new Error('Team id not specified');
        }

        return appConfig.paths.appHome.replace('{teamId}', id);
    };

    return {
        getPath,
    }
};
