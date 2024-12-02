import { AuthState } from "@/context/auth/authTypes";
import { AuthResponse, AuthErrorResponse} from "@/domain/authReponse";
import { mapperAuthResponse } from "./mapper/mapperAuth";

export const fetchAuth = async (
  username: string,
  password: string
): Promise<AuthState> => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

 
  if (!response.ok) {
    const errorData: AuthErrorResponse = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  const data: AuthResponse = await response.json();


  return mapperAuthResponse(data);
};
