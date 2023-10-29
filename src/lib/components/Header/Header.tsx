import { Text } from "@/core/ui/Text";
import { FunctionComponent } from "react";
import { HStack, styled } from "~/styled-system/jsx";
import { Navigation } from "./Navigation";

const headerHeight = "64px";

export const Header: FunctionComponent = () => {
    return (
        <styled.header h={headerHeight}>
            <HStack h={headerHeight} alignItems="center" maxW="6xl" mx="auto" justifyContent="space-between">
                <HStack gap="4">
                    <Text as="span" textStyle="xl" fontWeight="semibold">Turbokit</Text>
                    <Navigation />
                </HStack>
            </HStack>
        </styled.header>
    )
}