import { AxiosError } from "axios";
import { toast } from "sonner";

export function handleApiError(error: unknown) {
  let message = "Something went wrong";

  if (error instanceof AxiosError) {
    const response = error.response?.data;

    if (response?.message) {
      message = response.message;
    } else if (response?.errors) {
      message = Object.values(response.errors).join(", ");
    } else {
      message = error.message;
    }
  }

  toast.error(message);
}