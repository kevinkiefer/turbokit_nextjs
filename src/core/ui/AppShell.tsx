import { Box, Grid, styled } from "~/styled-system/jsx";

export const AppShell = styled(Grid, {
    base: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        gridTemplateAreas: `
            'header'
            'main'
        `,
        gridTemplateRows: '64px 1fr',
        bg: "bg.default"
    }
});

export const AppShellMain = styled("main", {
    base: {
        gridArea: "main",
    }
});

export const AppShellHeader = styled(Box, {
    base: {
        gridArea: 'header',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'border.subtle',
        bg: 'bg.default',
    }
});