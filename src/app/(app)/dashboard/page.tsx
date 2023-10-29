"use client";

import { api } from "@/core/api/api";
import { FunctionComponent } from "react";

const DashboardPage: FunctionComponent = () => {
    const { data } = api.greeting.useQuery();
    return <>
        Welcome in your protected area! <br />
        Message from server: {data}
    </>
}

export default DashboardPage;