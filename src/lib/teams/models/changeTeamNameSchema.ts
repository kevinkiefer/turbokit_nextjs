import z from "zod";
import { teamNameSchema } from "./teamNameSchema";

export const changeTeamNameSchema = z.object({
    name: teamNameSchema,
});

export type ChangeTeamNameSchema = z.infer<typeof changeTeamNameSchema>;