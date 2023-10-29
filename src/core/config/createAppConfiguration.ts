import { z } from "zod";

const appConfigurationSchema = z.object({
    paths: z.object({
        signIn: z.string().default("/auth/login"),
        appHome: z.string().default("/dashboard"),
    }),
});

export type AppConfiguration = z.infer<typeof appConfigurationSchema>;

export const createAppConfiguration = (configuration: AppConfiguration): AppConfiguration => {
    const config = appConfigurationSchema.safeParse(configuration);

    if (!config.success) {
        throw new Error("Invalid app configuration");
    }

    return config.data;
}