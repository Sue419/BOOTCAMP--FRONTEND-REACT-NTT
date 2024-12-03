export const refreshAccessToken = async (refreshToken: string): Promise<string> => {
    const response = await fetch("https://dummyjson.com/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }
  
    const data = await response.json();
    return data.accessToken;
  };
  