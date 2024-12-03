// src/context/auth/getAuthStorage.ts

export const getAuthStateFromStorage = () => {
  const token = localStorage.getItem("authToken");
  const user = localStorage.getItem("authUser");
  if (token && user) {
    return { token, user: JSON.parse(user) };
  }
  return null;
};
