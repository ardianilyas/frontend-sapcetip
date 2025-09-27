import { useMutation } from "@tanstack/react-query";
import { LoginSchema } from "../validators/auth.schema";
import { AuthService } from "../services/auth.service";
import { getMe } from "../api/getMe";
import { useAuthStore } from "@/stores/auth.store";
import { toast } from "sonner";

export function useLogin() {
    const setUser = useAuthStore((s) => s.setUser);

    return useMutation({
        mutationFn: (data: LoginSchema) => AuthService.signin(data),
        onSuccess: async () => {
            try {
                const user = await getMe();
                setUser(user);
            } catch (error) {
                toast.error("Something went wrong");
                console.error(error);
            }
        }
    });
}