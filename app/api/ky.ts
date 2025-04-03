import ky from "ky";

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: string) => void;
  reject: (error: Error) => void;
}> = [];

const processQueue = (error: Error | null, token: string | null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error!);
    }
  });
  failedQueue = [];
};

function getAccessTokenFromUser(userStr: string): string {
  try {
    const { access_token } = JSON.parse(userStr);
    if (!access_token) throw new Response("Invalid user", { status: 400 });
    return access_token;
  } catch {
    throw new Response("Missing access_token", { status: 400 });
  }
}

function getRefreshTokenFromUser(userStr: string): string {
  try {
    const { refresh_token } = JSON.parse(userStr);
    if (!refresh_token) throw new Response("Invalid user", { status: 400 });
    return refresh_token;
  } catch {
    throw new Response("Missing refresh_token", { status: 400 });
  }
}

export const getResponseData = <T>(response: any): T => {
  return response.data as T;
};

const API = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
  hooks: {
    beforeRequest: [
      (request) => {
        const user = localStorage.getItem("user");
        if (user) {
          const access_token = getAccessTokenFromUser(user);

          request.headers.set("Authorization", `Bearer ${access_token}`);
        }
      },
    ],
    afterResponse: [
      async (request, _options, response) => {
        if (response.status === 401) {
          const originalRequest = request.clone();

          if (!request.headers.get("x-retry")) {
            if (isRefreshing) {
              try {
                const newToken = await new Promise<string>(
                  (resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                  }
                );

                originalRequest.headers.set(
                  "Authorization",
                  `Bearer ${newToken}`
                );
                originalRequest.headers.set("x-retry", "true");
                return ky(originalRequest);
              } catch (err) {
                throw err;
              }
            }

            isRefreshing = true;

            try {
              const user = localStorage.getItem("user");
              if (!user) throw new Response("Missing user", { status: 400 });
              const refreshResponse = await ky
                .post("/auth/refresh-token", {
                  json: {
                    refresh_token: getRefreshTokenFromUser(user),
                  },
                })
                .json<{ access_token: string }>();

              const { access_token } = refreshResponse;
              localStorage.setItem("access_token", access_token);

              processQueue(null, access_token);

              originalRequest.headers.set(
                "Authorization",
                `Bearer ${access_token}`
              );
              originalRequest.headers.set("x-retry", "true");
              return ky(originalRequest);
            } catch (refreshError) {
              processQueue(refreshError as Error, null);
              throw refreshError;
            } finally {
              isRefreshing = false;
            }
          }
        }

        return response;
      },
    ],
  },
  retry: {
    limit: 0,
  },
});

export default API;
