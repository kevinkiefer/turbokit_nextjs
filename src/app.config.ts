import { createAppConfiguration } from "./core/config/createAppConfiguration";

export default createAppConfiguration({
    paths: {
        signIn: "/auth/login",
        appHome: "/teams",
        onboard: "/onboard",
    }
})