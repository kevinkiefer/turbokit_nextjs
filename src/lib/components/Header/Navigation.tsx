"use client";

import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import { HStack } from "~/styled-system/jsx";
import { NavItem } from "./NavItem";


export const Navigation: FunctionComponent = () => {
    const pathname = usePathname();

    const isDashboardPath = pathname?.endsWith('/dashboard');
    const isSettingsPath = pathname?.endsWith('/settings');

    return (
        <HStack>
            <NavItem href="dashboard" active={isDashboardPath}>Dashboard</NavItem>
            <NavItem href="settings" active={isSettingsPath}>Settings</NavItem>
        </HStack>
    )
}