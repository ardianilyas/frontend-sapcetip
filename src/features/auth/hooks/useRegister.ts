import { useMutation } from "@tanstack/react-query";
import { RegisterSchema } from "../validators/auth.schema";
import { AuthService } from "../services/auth.service";

export function useRegister() {
    return useMutation({
        mutationFn: (data: RegisterSchema) => AuthService.signup(data),
    });
}