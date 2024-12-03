import { User } from "./authTypes";
import { AuthAction } from "./authTypes";

export const loginSuccess = (user: User, token: string) => ({
  type: "LOGIN_SUCCESS",
  payload: { user, token },
});

export const logoutAction = (): AuthAction => ({
  type: "LOGOUT"
});