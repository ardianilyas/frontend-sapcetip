import api from "@/lib/axios";
import { LoginSchema, RegisterSchema } from "../validators/auth.schema";

export const AuthService = {
    signin: async (payload: LoginSchema) => {
        const res = await api.post("/auth/login", payload);
        return res.data;
    },
    signup: async (payload: RegisterSchema) => {
        const res = await api.post("/auth/register", payload);
        return res.data;
    },
    logout: async () => {
        const res = await api.post("/auth/logout");
        return res.data;
    }
}