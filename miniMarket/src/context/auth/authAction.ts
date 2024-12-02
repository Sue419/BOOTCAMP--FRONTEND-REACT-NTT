import { User } from "./authTypes";

export const loginSuccess = (user: User, token: string) => ({
  type: "LOGIN_SUCCESS",
  payload: { user, token },
});

export const logout = () => ({
  type: "LOGOUT",
});
