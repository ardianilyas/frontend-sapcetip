
import api from "@/lib/axios";
import { useAuthStore } from "@/stores/auth.store";
import { toast } from "sonner";

export function useLogout() {
  const clearUser = useAuthStore((s) => s.clearUser);

  async function logout() {
    await api.post("/auth/logout"); // backend hapus cookie
    clearUser(); // hapus dari zustand
    toast.success("Logged out");
  }

  return { logout };
}