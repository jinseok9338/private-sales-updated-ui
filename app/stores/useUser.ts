import { create } from "zustand";

export interface User {
  id?: number;
  name?: string;
  email?: string;
  role?: LoginResponse.role;
  group1?: LoginResponse.group1;
  group2?: LoginResponse.group2;
  payLimit?: number;
}

namespace LoginResponse {
  export enum role {
    ADMIN = "ADMIN",
    USER = "USER",
    BLOCK = "BLOCK",
  }
  export enum group1 {
    DIOR = "DIOR",
    OTHER = "OTHER",
  }
  export enum group2 {
    DIOR1 = "DIOR1",
    DIOR2 = "DIOR2",
    OTHER = "OTHER",
  }
}

interface UserStore {
  user: User | null;
  logout: () => void;
  login: (user: User) => void;
}

const isBrowser = typeof window !== "undefined";

const getInitialState = () => {
  if (!isBrowser) return null;

  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    return null;
  }
};

const useUser = create<UserStore>((set) => ({
  user: getInitialState(),
  logout: () => {
    if (!isBrowser) return;
    set({ user: null });
    localStorage.removeItem("user");
  },
  login: (user) => {
    if (!isBrowser) return;
    set({ user });
    localStorage.setItem("user", JSON.stringify(user));
  },
}));

export default useUser;
