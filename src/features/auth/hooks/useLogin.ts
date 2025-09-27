import { useMutation } from "@tanstack/react-query";
import { LoginSchema } from "../validators/auth.schema";
import { AuthService } from "../services/auth.service";

export function useLogin() {
    return useMutation({
        mutationFn: (data: LoginSchema) => AuthService.signin(data),
    });
}