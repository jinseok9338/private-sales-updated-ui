import axios from "axios";

// Create an Axios instance
const AxiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Token management
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });
  failedQueue = [];
};

// Request interceptor to attach the token
AxiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token"); // Replace with your token storage method
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle 401
AxiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        try {
          const newToken = await new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          });
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return AxiosClient(originalRequest);
        } catch (err) {
          return Promise.reject(err);
        }
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post("/auth/refresh-token", {
          refresh_token: localStorage.getItem("refresh_token"), // Replace with your refresh token storage method
        });

        const { access_token } = response.data;
        localStorage.setItem("access_token", access_token);

        processQueue(null, access_token);

        originalRequest.headers["Authorization"] = `Bearer ${access_token}`;
        return AxiosClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default AxiosClient;
