"use client";

import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import { HStack } from "~/styled-system/jsx";
import { NavItem } from "./NavItem";


export const Navigation: FunctionComponent = () => {
    const pathname = usePathname();

    const isDashboardPath = pathname?.endsWith('/dashboard');

    return (
        <HStack>
            <NavItem href="dashboard" active={isDashboardPath}>Dashboard</NavItem>
        </HStack>
    )
}