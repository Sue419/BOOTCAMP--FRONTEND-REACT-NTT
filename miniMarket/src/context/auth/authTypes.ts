
export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
}
  
export interface AuthState {
    user: User | null;
    token: string | null;
}
  
  export type AuthAction =
    | { type: "LOGIN_SUCCESS"; payload: { user: User | null; token: string | null }}
    | { type: "LOGOUT" };
  
