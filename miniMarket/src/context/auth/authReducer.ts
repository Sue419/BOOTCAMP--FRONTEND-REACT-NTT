import { AuthState, AuthAction } from "./authTypes";

export const initialAuthState: AuthState = {
  user: null,
  token: null,
};

export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user || null,
        token: action.payload.token || null,
      };
    case "LOGOUT":
      return initialAuthState;
    default:
      return state;
  }
};
