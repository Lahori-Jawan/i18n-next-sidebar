import { TOKEN } from "@/constants/auth";

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN);
  },

  setToken(accessToken: string) {
    localStorage.setItem(TOKEN, accessToken);
  },

  clearStorage() {
    localStorage.removeItem(TOKEN);
    console.log("token cleared");
  },
};

export { TokenService };
