import { createTRPCRouter } from "@/core/server/api/trpc";
import { createTeam } from "./createTeam";

export const teamRouter = createTRPCRouter({
    createTeam
})