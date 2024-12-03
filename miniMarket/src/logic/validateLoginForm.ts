import { fetchAuth } from '@/proxy/fetchAuth';

export const validateLoginForm = (username: string, password: string) => {
  let valid = true;
  let usernameError = '';
  let passwordError = '';

  if (!username) {
    usernameError = "Username is required";
    valid = false;
  }

  if (!password) {
    passwordError = "Password is required";
    valid = false;
  }

  return { valid, usernameError, passwordError };
};

export const handleLoginRequest = async (username: string, password: string) => {
  try {
    const response = await fetchAuth(username, password);
    if (response.token) {
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("authUser", JSON.stringify(response.user));
      return response;
    }
  } catch {
    throw new Error("Authentication failed. Please try again.");
  }
};
