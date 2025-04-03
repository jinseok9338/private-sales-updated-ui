import { create } from "zustand";

interface TokenStore {
  accessToken: string | null;
  refreshToken: string | null;
  logout: () => void;
  login: (token: string) => void;
}

const isBrowser = typeof window !== "undefined";

const getInitialState = () => {
  if (!isBrowser) return null;

  try {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");
    return {
      accessToken: storedAccessToken,
      refreshToken: storedRefreshToken,
    };
  } catch (error) {
    console.error("Error parsing token from localStorage:", error);
    return null;
  }
};

const useTokenStore = create<TokenStore>((set) => ({
  accessToken: getInitialState()?.accessToken ?? null,
  refreshToken: getInitialState()?.refreshToken ?? null,
  logout: () => {
    if (!isBrowser) return;
    set({ accessToken: null, refreshToken: null });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
  login: (token: string) => {
    if (!isBrowser) return;
    set({ accessToken: token, refreshToken: token });
    localStorage.setItem("accessToken", token);
    localStorage.setItem("refreshToken", token);
  },
}));

export default useTokenStore;
