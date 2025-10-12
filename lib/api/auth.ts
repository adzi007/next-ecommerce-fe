import { externalApi, internalApi } from "./index"; // use external backend API
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

interface LoginInterface {
  email: string;
  password: string;
}

export function useLogin(options?: UseMutationOptions<any, Error, LoginInterface>) {
    return useMutation({
        mutationFn: async (loginData: LoginInterface) => {
            // const { data } = await internalApi.post("/auth/login", { loginData })
            // return data
            return await internalApi.post("auth/login", { loginData })
        },
        ...options,
    });
}

