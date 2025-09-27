import api from "@/lib/axios";

export async function getMe() {
    const res = await api.get("/auth/me");
    return res.data;
}