import { AuthResponse } from "@/domain/authReponse";
import { AuthState } from "@/context/auth/authTypes";

export const mapperAuthResponse = (response: AuthResponse): AuthState => {
  return {
    user: {
      id: response.id,
      username: response.username,
      email: response.email,
      firstName: response.firstName,
      lastName: response.lastName,
      image: response.image,
    },
    token: response.accessToken,
  };
};
