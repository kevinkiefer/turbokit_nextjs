import z from "zod";

export const teamNameSchema = z.string().min(3, {
    message: "Name must be at least 3 characters long"
});
