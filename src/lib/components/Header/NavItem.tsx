import Link from "next/link";
import { styled } from "~/styled-system/jsx";

export const NavItem = styled(Link, {
    base: {
        py: 2,
        px: 4,
        rounded: "xs",
        color: "fg.default"
    },
    variants: {
        active: {
            true: {
                fontWeight: "bold",
                _hover: {
                    bg: "bg.muted",
                }
            },
            false: {
                fontWeight: "medum",
                _hover: {
                    bg: "bg.subtle",
                }
            }
        }
    },
    defaultVariants: {
        active: false,
    }
});