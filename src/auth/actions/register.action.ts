import { teslaApi } from "@/api/teslaApi";
import type { AuthResponse } from "../interfaces/auth.response";

export const registerAction = async (
  email: string,
  password: string,
  fullName: string
): Promise<AuthResponse> => {
  try {
    const { data } = await teslaApi.post<AuthResponse>("/auth/register", {
      email,
      password,
      fullName,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
