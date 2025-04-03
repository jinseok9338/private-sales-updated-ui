import API, { getResponseData } from "~/api/ky";

import type { User } from "~/stores/useUser";

interface LoginResponse {
  user: User;
  token: AuthToken;
}

interface AuthToken {
  accessToken: string;
  refreshToken: string;
}

export type LoginRequest = {
  email: string;
  password: string;
};

const authenticateUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const request: LoginRequest = { email, password };
  const response = await API.post("api/auth/login", { json: request }).json();
  return getResponseData<LoginResponse>(response);
};

export { authenticateUser };
